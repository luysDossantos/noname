import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { ListaCursosComponent } from '../../cursos/lista-cursos/lista-cursos.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { CardPersonComponent } from '../../../../../shared/components/card-person/card-person.component';
import { Bolseiro } from '../../api/models/bolseiro.model';
import { CadastrarBolseirosComponent } from '../../bolseiros/cadastrar-bolseiros/cadastrar-bolseiros.component';
import { DialogService } from 'primeng/dynamicdialog';
import { VincularBolseiroComponent } from '../vincular-bolseiro/vincular-bolseiro.component';

@Component({
    standalone: true,
    selector: 'app-detalhe-bolsa',
    imports: [
        CommonModule, BackButtonComponent, ButtonModule, TabsModule, SearchBarComponent, CardPersonComponent
    ],
    providers: [DialogService],
    templateUrl: './detalhe-bolsa.component.html',
    styleUrl: './detalhe-bolsa.component.scss',
})
export class DetalheBolsaComponent {

  dialogService = inject(DialogService)

  universityName = 'Bolsa de Mérito Acadêmico para Mulheres';
  universityDetails = 'Universidade Católica de Angola';
  location = 'Angola';
  phone = '(+244) 222 010 916';
  email = 'geral@ucan.ao';
  courseCount = 9;
  participants = [
    { photo: 'images/avatar2.png' },
    { photo: 'images/avatar3.png' },
    { photo: 'images/avatar4.jpeg' },
    { photo: 'images/avatar.jpeg' },
  ];


  bolseiros: Bolseiro[] = [
    {
      name: "Ana Silva",
      avatar: "avatar.jpeg",
      estado: "Vicunlado a uma bolsa",
      age: "25 anos de idade",
      country: "Lisbon, Portugal",
      duration: "6 meses",
    },
    {
      name: "Carlos Mendes",
      avatar: "avatar.jpeg",
      estado: "Inativo",
      age: "30 anos de idade",
      country: "Porto, Portugal",
      duration: "12 meses",
    },
    {
      name: "Maria Ferreira",
      avatar: "avatar.jpeg",
      estado: "Vicunlado a uma bolsa",
      age: "27 anos de idade",
      country: "Coimbra, Portugal",
      duration: "9 meses",
    },
    {
      name: "João Almeida",
      avatar: "avatar.jpeg",
      estado: "Suspenso",
      age: "29 anos de idade",
      country: "Braga, Portugal",
      duration: "3 meses",
    },
    {
      name: "Sofia Costa",
      avatar: "avatar.jpeg",
      estado: "Vicunlado a uma bolsa",
      age: "26 anos de idade",
      country: "Faro, Portugal",
      duration: "18 meses",
    },
  ];

  showDialog() {
    const ref = this.dialogService.open(VincularBolseiroComponent, {
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
}
