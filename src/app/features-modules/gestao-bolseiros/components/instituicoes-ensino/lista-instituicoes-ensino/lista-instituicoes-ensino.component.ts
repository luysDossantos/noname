import { Component, inject } from '@angular/core';
import { CardEmpresaComponent } from '../../../../../shared/components/card-empresa/card-empresa.component';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { DialogService } from 'primeng/dynamicdialog';
import { CadastroIntituicaoEnsinoComponent } from '../cadastro-intituicao-ensino/cadastro-intituicao-ensino.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lista-instituicoes-ensino',
    imports: [
        RouterLink, CardEmpresaComponent, SearchBarComponent
    ],
    providers: [DialogService],
    templateUrl: './lista-instituicoes-ensino.component.html',
    styleUrl: './lista-instituicoes-ensino.component.scss',
    standalone: true
})
export class ListaInstituicoesEnsinoComponent {

  dialogService = inject(DialogService)

  empresas: Empresas[] = [
    { name: "Amarildo Corp.", isActive: true, industry: "Ensino Superior", employees: [{ avatar: "avatar.jpeg" }], location: "Nova Vida", website: "www.amarildo.com" },
    { name: "Amarildo Corp.", isActive: true, industry: "Ensino Superior", employees: [{ avatar: "avatar.jpeg" }], location: "Nova Vida", website: "www.amarildo.com" },
    { name: "Amarildo Corp.", isActive: true, industry: "Ensino Superior", employees: [{ avatar: "avatar.jpeg" }], location: "Nova Vida", website: "www.amarildo.com" },
    { name: "Amarildo Corp.", isActive: true, industry: "Ensino Superior", employees: [{ avatar: "avatar.jpeg" }], location: "Nova Vida", website: "www.amarildo.com" },
    { name: "Amarildo Corp.", isActive: true, industry: "Ensino Superior", employees: [{ avatar: "avatar.jpeg" }], location: "Nova Vida", website: "www.amarildo.com" },
  ];

  showDialog() {
    const ref = this.dialogService.open(CadastroIntituicaoEnsinoComponent, {
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

interface Empresas {
  name: string;
  isActive: boolean;
  industry: string;
  employees: { avatar: string }[];
  location: string;
  website: string;
}