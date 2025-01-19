import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { TableModule } from 'primeng/table';
import { ListaConcursosComponent } from '../lista-concursos/lista-concursos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-concursos',
  imports: [
    ListaConcursosComponent, SearchBarComponent, TableModule
  ],
  providers: [],
  templateUrl: './home-concursos.component.html',
  styleUrl: './home-concursos.component.scss'
})
export class HomeConcursosComponent {

  router = inject(Router)

  cadastrarConcurso() {
    this.router.navigate(['gestao-concurso/concurso/cadastrar'])
  }
}
