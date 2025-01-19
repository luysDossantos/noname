import { Component, inject } from '@angular/core';
import { ConcursoCategoriaCandidatura, ConcursoCategoriaCandidaturaService } from '../../api';
import { EstadoCandidaturaDescPipe } from '../../../../shared/pipes/estado-candidatura-desc.pipe';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-lista-candidaturas',
  imports: [
   CommonModule, ButtonModule, TableModule, EstadoCandidaturaDescPipe
  ],
  templateUrl: './lista-candidaturas.component.html',
  styleUrl: './lista-candidaturas.component.scss'
})
export class ListaCandidaturasComponent {

  candidaturaService = inject(ConcursoCategoriaCandidaturaService)
  candidaturas: ConcursoCategoriaCandidatura[] = []

  ngOnInit(): void {
    this.getCandidaturas();
  }

  getCandidaturas() {
    this.candidaturaService.getAllConcursoCategoriaCandidaturaGet().subscribe(result => {
      if (result.retorno?.codigo == 200 && result.data) {
        this.candidaturas = result.data
      }
    });
  }
}
