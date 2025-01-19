import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { EntidadeConcurso, EntidadeConcursoService } from '../../../api';
import { TrimTextPipe } from '../../../../../shared/pipes/truncate-text.pipe';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-lista-concursos',
  imports: [
    CommonModule, TableModule, Menu, ButtonModule, TrimTextPipe
  ],
  templateUrl: './lista-concursos.component.html',
  styleUrl: './lista-concursos.component.scss'
})
export class ListaConcursosComponent implements OnInit {

  router = inject(Router)
  cursoService = inject(EntidadeConcursoService);
  listaConcursos: EntidadeConcurso[] = [];
  concursoSelecionado: EntidadeConcurso | undefined | null;
  first = 0;
  rows = 5;
  accoes: MenuItem[] = [];

  ngOnInit() {
    this.getConcursos();
    this.setAccoes();
  }

  getConcursos() {
    this.cursoService.getAllEntidadeConcursoGet().subscribe(concursos => {
      this.listaConcursos = concursos.data ?? [];
    });
  }

  setAccoes() {
    this.accoes = [
      { 
        label: 'Ver mais detalhes', icon: 'pi pi-pencil',
        command: () => {
          this.router.navigate(['gestao-concurso/concurso/atualizar', this.concursoSelecionado?.id])
        } 
      },
      {
        label: 'Parametrizar', icon: 'pi pi-sliders-h',
        command: () => {
          this.router.navigate(['gestao-concurso/concurso/parametrizar', this.concursoSelecionado?.id])
        } 
      },
      {
        label: 'Actualizar', icon: 'pi pi-pencil',
        command: () => {
          this.router.navigate(['gestao-concurso/concurso/atualizar', this.concursoSelecionado?.id])
        } 
      },
      {
        label: 'Arquivar', icon: 'pi pi-box'
      },
      {
        label: 'Cancelar', icon: 'pi pi-times'
      },
    ];
  }

  actionClick(concurso: EntidadeConcurso) {
    this.concursoSelecionado = concurso;
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
    return this.listaConcursos ? this.first + this.rows >= this.listaConcursos.length : true;
  }

  isFirstPage(): boolean {
    return this.listaConcursos ? this.first === 0 : true;
  }
}
