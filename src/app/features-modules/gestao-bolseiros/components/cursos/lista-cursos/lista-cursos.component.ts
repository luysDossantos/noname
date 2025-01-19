import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { TableModule } from 'primeng/table';
import { Select } from 'primeng/select';
import { DialogService } from 'primeng/dynamicdialog';
import { CadastrarCursoComponent } from '../cadastrar-curso/cadastrar-curso.component';

@Component({
    selector: 'app-lista-cursos',
    imports: [
        SearchBarComponent, TableModule, Select,
    ],
    providers: [DialogService],
    templateUrl: './lista-cursos.component.html',
    styleUrl: './lista-cursos.component.scss',
    standalone: true
})
export class ListaCursosComponent {

  dialogService = inject(DialogService)

  cursos: Curso[] = [
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
    { curso: "Engenharia Informática", sigla: "EIN", duracao: "5 anos", num_cadeiras: "55", grauAcademico: "Licenciatura", estado: "Ativo", },
  ]
  first = 0;
  rows = 5;

  showDialog() {
    const ref = this.dialogService.open(CadastrarCursoComponent, {
      showHeader: false,
      width: '50%',
      modal: true,
    });

    ref.onClose.subscribe((data) => {
      if (data) {
        console.log('Form submitted:', data);
      }
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.cursos ? this.first + this.rows >= this.cursos.length : true;
  }

  isFirstPage(): boolean {
    return this.cursos ? this.first === 0 : true;
  }
}

interface Curso {
  curso: string;
  sigla: string;
  duracao: string;
  num_cadeiras: string;
  grauAcademico: string;
  estado: string;
}
