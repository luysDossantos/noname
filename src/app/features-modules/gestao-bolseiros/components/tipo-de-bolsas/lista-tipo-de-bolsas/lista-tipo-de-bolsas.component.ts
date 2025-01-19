import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { TipoBolsaService } from '../../api/services/tipo-bolsa.service';
import { TipoBolsa } from '../../api/models/tipo-bolsa.model';
import { CadastrarTipoBolsaComponent } from '../cadastrar-tipo-de-bolsas/cadastrar-tipo-de-bolsas.component';
import { ToastModule } from 'primeng/toast';
import { SearchBarComponent } from '@app/shared/components/search-bar/search-bar.component';
import { ApiService } from '@core/providers/http';

@Component({
  selector: 'app-lista-tipo-bolsa',
  imports: [
    CommonModule,
    SearchBarComponent,
    RouterModule,
    ToastModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ReactiveFormsModule,
  ],
  templateUrl: './lista-tipo-de-bolsas.component.html',
  styleUrls: ['./lista-tipo-de-bolsas.component.scss'],
  providers: [DialogService, MessageService, TipoBolsaService, ApiService],
})
export class ListaTipoBolsaComponent implements OnInit {
  tipoBolsas: TipoBolsa[] = [];
  displayDialog = false;
  tipoBolsaService = inject(TipoBolsaService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);

  ngOnInit() {
    this.getAllTiposBolsa();
  }

  getAllTiposBolsa(queryParams: any = {}) {
    this.tipoBolsaService.list(queryParams).subscribe(
      (data) => {
        this.tipoBolsas = data;
      },
      (error) => {
        console.error('Erro ao buscar tipos de bolsa:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao buscar tipos de bolsa.',
        });
      }
    );
  }

  onFormValueChange(event: any) {
    this.getAllTiposBolsa(event);
  }

  showDialog() {
    const ref = this.dialogService.open(CadastrarTipoBolsaComponent, {
      showHeader: false,
      width: '50%',
      modal: true,
    });

    ref.onClose.subscribe((data) => {
      if (data) {
        this.tipoBolsaService.store(data).subscribe(
          (response) => {
            this.tipoBolsas.push(response);
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Tipo de bolsa adicionado com sucesso',
            });
            this.getAllTiposBolsa();
          },
          (error) => {
            console.error('Erro ao criar tipo de bolsa:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao criar tipo de bolsa.',
            });
          }
        );
      }
    });
  }
}
