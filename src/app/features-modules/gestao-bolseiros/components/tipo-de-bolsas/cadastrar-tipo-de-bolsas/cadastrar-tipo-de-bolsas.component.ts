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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-cadastrar-tipo-de-bolsas',
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    DynamicDialogModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  templateUrl: './cadastrar-tipo-de-bolsas.component.html',
  styleUrl: './cadastrar-tipo-de-bolsas.component.scss',
})
export class CadastrarTipoBolsaComponent {
  tipoBolsaForm: FormGroup;

  constructor(private fb: FormBuilder, private ref: DynamicDialogRef) {
    this.tipoBolsaForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      valorMensal: [0, [Validators.required, Validators.min(0)]],
      duracaoMeses: [0, [Validators.required, Validators.min(0)]],
    });
  }

  save() {
    if (this.tipoBolsaForm.valid) {
      this.ref.close(this.tipoBolsaForm.value); // Close the dialog and pass data back
    }
  }

  cancel() {
    this.ref.close(); // Close the dialog without saving
  }
}
