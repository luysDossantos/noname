import { Component, inject, Input } from '@angular/core';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { Toast } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { ConcursoCategoriaFase, ConcursoCategoriaFaseService, EntidadeConcurso, EntidadeConcursoService, Fase } from '../../../api';
import { TableModule } from 'primeng/table';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { CadastroIntituicaoEnsinoComponent } from '../../../../gestao-bolseiros/components/instituicoes-ensino/cadastro-intituicao-ensino/cadastro-intituicao-ensino.component';
import { AddCategoriaFaseComponent } from './add-categoria-fase/add-categoria-fase.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-parametrizar-concurso',
  imports: [
    CommonModule, BackButtonComponent, TabsModule, FormsModule, ReactiveFormsModule, InputTextModule, ButtonModule, StepperModule,
    Toast, FileUploadModule, TableModule, Select, Toast
  ],
  providers: [DialogService, MessageService],
  templateUrl: './parametrizar-concurso.component.html',
  styleUrl: './parametrizar-concurso.component.scss'
})
export class ParametrizarConcursoComponent {

  @Input()
  set id(concursoId: number | undefined) {
    if (concursoId) {
      this.getConcurso(concursoId);
    }
  }
  dialogService = inject(DialogService)
  fb = inject(FormBuilder);
  concursoService = inject(EntidadeConcursoService);
  categoriaFaseService = inject(ConcursoCategoriaFaseService);
  messageService = inject(MessageService);
  concurso: EntidadeConcurso | undefined | null;
  addCategoriaForm: FormGroup = new FormGroup({});
  categoriaFases: ConcursoCategoriaFase[] = [];
  idCategoriaSelecionada: number = 0;

  constructor() {
    this.buildForm();
  }

  buildForm() {
    this.addCategoriaForm = this.fb.group({
      nome: [''],
      descricao: [''],
      numVaga: ['']
    });
  }

  getConcurso(concursoId: number) {
    this.concursoService.getEntidadeConcursoByIdIdGet(concursoId).subscribe(result => {
      if (result.retorno?.codigo == 200) {
        this.concurso = result.data;
        return
      }
    });
  }

  getFasesCategoria() {
    if (this.idCategoriaSelecionada !== 0) {
      this.categoriaFaseService.getConcursoCategoriaFaseByConcursoCategoriaIDIdGet(this.idCategoriaSelecionada)
        .subscribe(result => {
          if (result.retorno?.codigo == 200 && result.data) {
            this.categoriaFases = result.data
          }
        })
    }
  }

  addCategoria() {
    throw new Error('Method not implemented.');
  }

  showDialogAddFase(faseToEdit?: Fase) {
    if (this.idCategoriaSelecionada == 0) {
      this.messageService.add({ severity: 'warn', summary: 'Alerta', detail: 'Selecione uma categoria', life: 3000 });
      return
    }
    const ref = this.dialogService.open(AddCategoriaFaseComponent, {
      showHeader: false,
      width: '50%',
      modal: true,
      data: { 
        categoria: this.concurso?.concursoCategorias?.find(x => x.id == this.idCategoriaSelecionada),
        faseToEdit
      }
    });
    ref.onClose.subscribe((data) => {
      if (data?.refresh) {
        this.getFasesCategoria()
        console.log('Refresh:', data.refresh);
      }
    });
  }

}
