import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardEmpresa02Component } from '@app/shared/components/card-empresa-02/card-empresa-02.component';
import { SearchBarComponent } from '@app/shared/components/search-bar/search-bar.component';
import { DialogService } from 'primeng/dynamicdialog';
import { AdicionarEmpresasComponent } from '../adicionar-empresas/adicionar-empresas.component';
import { MessageService } from 'primeng/api';
import { ApiService } from '@core/providers/http';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-lista-empresas',
  imports: [RouterLink, SearchBarComponent, CardEmpresa02Component],
  providers: [DialogService, MessageService, ApiService, ToastModule, ],
  templateUrl: './lista-empresas.component.html',
  styleUrl: './lista-empresas.component.scss',
  standalone: true
})
export class ListaEmpresasComponent {

 
  dialogService = inject(DialogService)

  empresas: Empresa[] = [
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
    const ref = this.dialogService.open(AdicionarEmpresasComponent, {
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
interface Empresa {
  name: string;
  avatar: string;
  estado: string;
  age: string;
  country: string;
  duration: string;
}
