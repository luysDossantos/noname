import { Pipe, PipeTransform } from '@angular/core';
import { EstadoConcursoCandidaturaEnum } from '../../features-modules/gestao-de-concurso/api';

@Pipe({
  name: 'estadoCandidaturaDesc'
})
export class EstadoCandidaturaDescPipe implements PipeTransform {

  transform(value: EstadoConcursoCandidaturaEnum): string {
    return EstadoConcursoCandidaturaDescriptions[value] || 'Desconhecido';
  }

}

export const EstadoConcursoCandidaturaDescriptions: { [key in EstadoConcursoCandidaturaEnum]: string } = {
  1: "Elegível",
  2: "Não Elegível",
  3: "Pendente",
  4: "Suspensa Temporária",
  5: "Suspensa Definitiva",
  6: "Desistente",
};
