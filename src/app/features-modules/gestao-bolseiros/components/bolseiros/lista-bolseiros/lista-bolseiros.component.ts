import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { CardPersonComponent } from '../../../../../shared/components/card-person/card-person.component';
import { CadastrarBolseirosComponent } from '../cadastrar-bolseiros/cadastrar-bolseiros.component';
import { ApiService } from '@core/providers/http/api.service';
import { Bolseiro } from '../../api/models/bolseiro.model';
import { BolseiroService } from '../../api/services/bolseiro.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FilterItem } from '../../api/models/filterItem.model';
import { UtilizadorService } from '../../api/services/utilizador.service';
import { Utilizador } from '../../api/models/utilizador.model';

@Component({
  selector: 'app-lista-bolseiros',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    CardPersonComponent,
    RouterModule,
    ToastModule,
  ],
  providers: [DialogService, ApiService, MessageService, BolseiroService],
  templateUrl: './lista-bolseiros.component.html',
  styleUrls: ['./lista-bolseiros.component.scss'],
})
export class ListaBolseirosComponent implements OnInit {
  dialogService = inject(DialogService);
  bolseiroService = inject(BolseiroService);
  messageService = inject(MessageService);
  router = inject(Router);
  utilizadorService = inject(UtilizadorService);
  bolseiros: Bolseiro[] = [];
  utilizadores: Utilizador[] = [];
  estados = [
    { id: 'ativo', designacao: 'Ativo' },
    { id: 'inativo', designacao: 'Inativo' }
  ];

  tiposDeBolsa = [
    { id: 'parcial', designacao: 'Parcial' },
    { id: 'integral', designacao: 'Integral' }
  ];

  filters: FilterItem[] = [
    { type: 'text', controlName: 'nome', placeholder: 'Nome' },
    { type: 'dropdown', controlName: 'estado', placeholder: 'Estado', options: this.estados, optionLabel: 'designacao', optionValue: 'id' },
    { type: 'dropdown', controlName: 'tipoDeBolsa', placeholder: 'Tipo de bolsa', options: this.tiposDeBolsa, optionLabel: 'designacao', optionValue: 'id' }
  ];
  ngOnInit() {
    this.getAllBolseiros();
  }

  handleFormValueChange(formValue: any) {
    this.getAllBolseiros(formValue);
  }

  getAllUtilizadores() {
    this.utilizadorService.list().subscribe(
      (data) => {
        this.utilizadores = data;
      },
      (error) => {
        console.error('Erro ao buscar utilizadores:', error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao buscar utilizadores.' });
      }
    );
  }

  getAllBolseiros(queryParams?: any) {
    this.bolseiroService.list(queryParams).subscribe(
      (bolseiros: Bolseiro[]) => {
        this.bolseiros = bolseiros;
      },
      (error: any) => console.error('Erro ao buscar bolseiros:', error)
    );
  }

  showDialog() {
    const ref = this.dialogService.open(CadastrarBolseirosComponent, {
      showHeader: false,
      width: '50%',
      modal: true,
    });

    ref.onClose.subscribe((data) => {
      if (data) {
        this.bolseiroService.store(data).subscribe(
          () => {
            this.getAllBolseiros();
            this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Bolseiro criado com sucesso!' });
          },
          (error) => {
            console.error('Erro ao criar bolseiro:', error);
            this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao criar bolseiro.' });
          }
        );
      }
    });
  }

  trackByBolseiroId(index: number, item: Bolseiro): number {
    return item.id; // Supondo que cada Bolseiro tem um campo 'id' único
  }
}
