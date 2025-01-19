import { Component, inject } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CadatrarBolsaComponent } from '../../bolsas/cadatrar-bolsa/cadatrar-bolsa.component';
import { RouterLink } from '@angular/router';
import { CardBolsaComponent } from '../../../../../shared/components/card-bolsa/card-bolsa.component';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { CardEmpresa02Component } from '../../../../../shared/components/card-empresa-02/card-empresa-02.component';
import { CadastrarInstituicaoGestoraComponent } from '../cadastrar-instituicao-gestora/cadastrar-instituicao-gestora.component';

@Component({
    selector: 'app-lista-instituicoes-gestoras',
    imports: [
        SearchBarComponent, RouterLink, CardEmpresa02Component
    ],
    providers: [DialogService],
    templateUrl: './lista-instituicoes-gestoras.component.html',
    styleUrl: './lista-instituicoes-gestoras.component.scss',
    standalone: true
})
export class ListaInstituicoesGestorasComponent {


  dialogService = inject(DialogService)

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
    const ref = this.dialogService.open(CadastrarInstituicaoGestoraComponent, {
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

interface Bolseiro {
  name: string;
  avatar: string;
  estado: string;
  age: string;
  country: string;
  duration: string;
}
