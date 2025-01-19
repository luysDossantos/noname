import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { FileUploadModule } from 'primeng/fileupload';
import { Editor } from 'primeng/editor';
import { Entidade, EntidadeConcurso, EntidadeConcursoService, EntidadeService, Fase, FaseService } from '../../../api';
import { RadioButton } from 'primeng/radiobutton';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { map } from 'rxjs';
import { PickListModule } from 'primeng/picklist';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-concurso',
  imports: [
    CommonModule, ReactiveFormsModule, Select, InputTextModule, ButtonModule, StepperModule, TableModule,
    Toast, DatePicker, BackButtonComponent, FileUploadModule, Editor, RadioButton, PickListModule
  ],
  providers: [MessageService],
  templateUrl: './cadastrar-concurso.component.html',
  styleUrl: './cadastrar-concurso.component.scss'
})
export class CadastrarConcursoComponent implements OnInit {

  @Input()
  set id(concursoId: number | undefined) {
    if (concursoId) {
      this.getConcurso(concursoId);
    }
  }
  router = inject(Router)
  concursoService = inject(EntidadeConcursoService);
  entidadeService = inject(EntidadeService);
  faseService = inject(FaseService);
  cdr = inject(ChangeDetectorRef);
  messageService = inject(MessageService);
  fb = inject(FormBuilder);
  concurso: EntidadeConcurso | undefined | null;
  entidades: Entidade[] = [];
  fases: Fase[] = [];
  fasesSelecionadas: Fase[] = [];
  addConcursoForm: FormGroup = new FormGroup({});
  activeStep: number = 1;

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.entidadeService.getAllEntidadeGet().pipe(map(data => data || [])).subscribe(entidades => {
      this.entidades = entidades.data ?? [];
    });
    this.faseService.getAllFaseGet().pipe(map(data => data || [])).subscribe(fases => {
      this.fases = fases.data ?? [];
    })
  }

  prevStep() {
    if (this.activeStep === 1) {
      return;
    }
    this.activeStep--;
  }

  nextStep() {
    if (this.activeStep === 2) {
      this.save();
      return;
    }
    this.activeStep++;
  }

  buildForm() {
    this.addConcursoForm = this.fb.group({
      id: [0],
      entidadeId: [0, Validators.required],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      isMultiplas: [true, Validators.required],
      dataInicio: [new Date(), Validators.required],
      dataFim: [new Date(), Validators.required],
      categoriaForm: this.fb.group({
        nome: [''],
        descricao: [''],
        numVaga: [0],
      }),
      concursoCategorias: this.fb.array([]) // Empty array to store categories
    });
  }

  get categoriasControls() {
    return (this.addConcursoForm.get('concursoCategorias') as FormArray).controls;
  }

  addCategoria() {
    const categoriaForm = this.addConcursoForm.get('categoriaForm') as FormGroup;
    const categorias = this.addConcursoForm.get('concursoCategorias') as FormArray;

    if (categoriaForm.valid) {
      categorias.push(this.fb.group(categoriaForm.value)); // Add a copy of the current category
      categoriaForm.reset({
        nome: '',
        descricao: '',
        numVaga: 0
      }); // Reset form for the next entry
    } else {
      categoriaForm.markAllAsTouched(); // Highlight validation errors
    }
  }

  removeCategoria(index: number) {
    const categorias = this.addConcursoForm.get('concursoCategorias') as FormArray;
    categorias.removeAt(index);
  }

  addFase(categoriaIndex: number) {
    const categorias = this.addConcursoForm.get('concursoCategorias') as FormArray;
    const fases = categorias.at(categoriaIndex).get('concursoCategoriaFases') as FormArray;
    fases.push(
      this.fb.group({
        faseID: [0],
        ordem: [0],
        dataInicio: [new Date(), Validators.required],
        dataFim: [new Date(), Validators.required],
      })
    );
  }

  removeFase(categoriaIndex: number, faseIndex: number) {
    const categorias = this.addConcursoForm.get('concursoCategorias') as FormArray;
    const fases = categorias.at(categoriaIndex).get('concursoCategoriaFases') as FormArray;
    fases.removeAt(faseIndex);
  }

  getConcurso(concursoId: number) {
    this.concursoService.getEntidadeConcursoByIdIdGet(concursoId).subscribe(concurso => {
      this.concurso = concurso.data;
      if (this.concurso) {
        this.addConcursoForm?.patchValue({
          ...this.concurso,
          dataInicio: this.concurso.dataInicio ? new Date(this.concurso.dataInicio) : null,
          dataFim: this.concurso.dataFim ? new Date(this.concurso.dataFim) : null
        });
      }
    });
  }

  save() {
    if (this.addConcursoForm?.invalid) {
        this.messageService.add({ severity: 'warn', summary: 'Alerta', detail: 'Formulário inválido', life: 3000 });
        return;
    }
    this.concurso = {
      ...this.addConcursoForm?.value
    } as EntidadeConcurso;
    this.concursoService.addEntidadeConcursoPost(this.concurso).subscribe(result => {
      if (result.retorno?.codigo === 200) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Concurso criado', life: 3000 });
        this.router.navigate(['/gestao-concurso/concurso'])
        this.limpar();
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falha na criação do concurso criado', life: 3000 });
      }
    });
  }

  limpar() {
    this.addConcursoForm?.reset();
    this.concurso = null;
  }

}
