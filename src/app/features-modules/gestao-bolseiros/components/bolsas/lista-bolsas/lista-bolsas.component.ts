import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { CardBolsaComponent } from '../../../../../shared/components/card-bolsa/card-bolsa.component';
import { CadatrarBolsaComponent } from '../cadatrar-bolsa/cadatrar-bolsa.component';
import { ApiService } from '@core/providers/http/api.service';
import { Bolsa } from '../../api/models/bolsa.model';
import { BolsaService } from '../../api/services/bolsa.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { PaisService } from '../../api/services';
import { City } from '../../api/models/city.model';

@Component({
  selector: 'app-lista-bolsas',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    CardBolsaComponent,
    RouterModule,
    ToastModule,
  ],
  providers: [
    DialogService,
    ApiService,
    MessageService,
    BolsaService,
    PaisService,
  ],
  templateUrl: './lista-bolsas.component.html',
  styleUrls: ['./lista-bolsas.component.scss'],
})
export class ListaBolsasComponent implements OnInit {
  dialogService = inject(DialogService);
  bolsaService = inject(BolsaService);
  messageService = inject(MessageService);
  paisService = inject(PaisService);
  cities: City[] = [];
  router = inject(Router);
  paises: any[] = [];
  bolseiros: Bolsa[] = [];

  ngOnInit() {
    this.getAllBolsas();
    this.getAllPaises();
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  getAllPaises() {
    this.paisService.list().subscribe(
      (data) => {
        this.paises = data;
      },
      (error) => {
        console.error('Erro ao buscar países:', error);
      }
    );
  }

  onSecondBtnClick() {
    this.router.navigate(['/gestao-bolseiros/tipo-bolsa']);
  }

  onFormValueChange(formValue: any) {
    this.getAllBolsas(formValue);
  }

  getAllBolsas(queryParams?: any) {
    this.bolsaService.list(queryParams).subscribe(
      (bolsas: Bolsa[]) => {
        this.bolseiros = bolsas;
      },
      (error: any) => {
        console.error('Erro ao buscar bolsas:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao buscar bolsas.',
        });
      }
    );
  }

  showDialog() {
    const ref = this.dialogService.open(CadatrarBolsaComponent, {
      showHeader: false,
      width: '50%',
      modal: true,
    });

    ref.onClose.subscribe((data) => {
      if (data) {
        this.bolsaService.store(data).subscribe(
          (response: any) => {
            if (response && response.data) {
              this.getAllBolsas();
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Bolsa criada com sucesso!',
              });
            } else {
              const errorMessage =
                response?.retorno?.mensagem || 'Erro desconhecido';
              this.messageService.add({
                severity: 'error',
                summary: 'Erro',
                detail: `Erro ao criar bolsa: ${errorMessage}`,
              });
            }
          },
          (error: any) => {
            console.error('Erro ao criar bolsa:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao criar bolsa.',
            });
          }
        );
      }
    });
  }
}
