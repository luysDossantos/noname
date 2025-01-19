import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card-bolsa',
    imports: [
        CommonModule
    ],
    templateUrl: './card-bolsa.component.html',
    styleUrl: './card-bolsa.component.scss',
    standalone: true
})
export class CardBolsaComponent {
  name = input();
  avatar = input();
  estado = input();
  age = input();
  country = input();
  duration = input();
  tipoBolsa = input();

  sponsor: string = 'Catoca';
  vacancies: number = 30;
  status: string = 'Activa';
  description: string =
    'Uma oportunidade para estudantes de alto desempenho ingressarem na graduação com cobertura integral das mensalidades. Destinada a alunos que concluíram o ensino médio com média igual ou superior a 17 valores.';
  startDate: string = '13/01/2025';
  endDate: string = '25/05/2025';
  tags: string[] = ['Bolsa de Mérito', 'Mestrado', 'Integral', 'Interna'];
  participants = [
    { photo: 'images/avatar2.png' },
    { photo: 'images/avatar3.png' },
    { photo: 'images/avatar4.jpeg' }
  ];
  extraParticipants: number = 5;
}
