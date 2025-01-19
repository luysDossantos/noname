import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ConcursoCategoria, ConcursoCategoriaFase, ConcursoCategoriaFaseService, Fase, FaseService } from '../../../../api';
import { DatePicker } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-categoria-fase',
  imports: [
    ReactiveFormsModule, DialogModule, Select, DatePicker, InputTextModule, ButtonModule
  ],
  providers: [
    DialogService, MessageService
  ],
  templateUrl: './add-categoria-fase.component.html',
  styleUrl: './add-categoria-fase.component.scss'
})
export class AddCategoriaFaseComponent implements OnInit {

  private fb = inject(FormBuilder);
  messageService = inject(MessageService);
  ref = inject(DynamicDialogRef);
  dialogConfig = inject(DynamicDialogConfig);
  faseService = inject(FaseService);
  categoriaFaseService = inject(ConcursoCategoriaFaseService);
  categoria: ConcursoCategoria = this.dialogConfig.data.categoria;
  faseToEdit: ConcursoCategoriaFase = this.dialogConfig.data.faseToEdit;
  institutionForm: FormGroup = new FormGroup({});
  fases: Fase[] = [];

  ngOnInit(): void {
    this.getFases();
    this.buildForm();
  }

  buildForm() {
    this.institutionForm = this.fb.group({
      categoriaNome: [{ value: this.categoria.nome, disabled: true }],
      concursoCategoriaID: [this.categoria.id, Validators.required],
      faseID: [this.faseToEdit?.faseID ?? '', Validators.required],
      ordem: [this.faseToEdit?.ordem ?? '', Validators.required],
      dataInicio: [this.faseToEdit?.dataInicio ? new Date(this.faseToEdit.dataInicio) : new Date(), Validators.required],
      dataFim: [this.faseToEdit?.dataFim ? new Date(this.faseToEdit.dataFim) : new Date(), Validators.required]
    });
  }

  getFases() {
    this.faseService.getAllFaseGet().subscribe(result => {
      if (result.retorno?.codigo == 200 && result.data) {
        this.fases = result.data
      }
    })
  }

  save() {
    if (!this.institutionForm.valid) {
      this.messageService.add({ severity: 'warn', summary: 'Alerta', detail: 'Formulário inválido', life: 3000 });
      return
    }
    let categoriaFase = {
      ...this.institutionForm.value
    } as ConcursoCategoriaFase;
    // this.ref.close(categoriaFase);
    /* const saveOperation = this.perfil.id == 0
      ? this.perfilService.addPerfilPost(this.perfil)
      : this.perfilService.updatePerfilPut(this.perfil); */

    this.categoriaFaseService.addConcursoCategoriaFasePost(categoriaFase).subscribe(result => {
      if (result.retorno?.codigo === 200) {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Fase adicionada', life: 3000 });
        this.ref.close({ refresh: true });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Falha ao adicionar fase', life: 3000 });
      }
    })
  }

  cancel() {
    this.ref.close(); // Close the dialog without saving
  }

}
