import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

@Component({
    selector: 'app-cadastrar-bolseiros',
    imports: [
        ReactiveFormsModule, DialogModule, Select, InputTextModule, ButtonModule, StepperModule,
        DatePicker, CommonModule
    ],
    providers: [
        DialogService
    ],
    templateUrl: './cadastrar-bolseiros.component.html',
    styleUrl: './cadastrar-bolseiros.component.scss',
    standalone: true
})
export class CadastrarBolseirosComponent {

  private fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);

  bolseiroForm = this.fb.group({
    nome: ['', Validators.required],
    nacionalidadeID: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    estadoCivil: ['', Validators.required],
    genero: ['', Validators.required],
    nivelAcademicoId: ['', Validators.required],
    contactoPrincipal: ['', Validators.required],
    contactoSecundario: [''],
    provincia: ['', Validators.required],
    municipioID: ['', Validators.required],
    endereco: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  activeStep: number = 1;

  nacionalidades = [
    { label: 'Angola', id: 1 },
    { label: 'Namibiana', id: 2 }
  ];

  estadoCivilOptions = [
    { label: 'Solteiro', id: 1 },
    { label: 'Casado', id: 2 }
  ];

  generoOptions = [
    { label: 'Masculino', id: 1 },
    { label: 'Feminino', id: 2 }
  ];

  nivelAcademicoOptions = [
    { label: 'Base', id: 1 },
    { label: 'Médio', id: 2 },
    { label: 'Licenciado', id: 3 }
  ];

  provincias = [
    { label: 'Luanda', id: 1 },
    { label: 'Benguela', id: 2 },
    { label: 'Huambo', id: 3 }
  ];

  municipios = [
    { label: 'Cazenga', id: 1 },
    { label: 'Viana', id: 2 },
    { label: 'Cacuaco', id: 3 }
  ];

  save() {
    if (this.bolseiroForm.valid) {
      console.log(this.bolseiroForm.value); // Send data to the backend or handle logic
      this.ref.close(this.bolseiroForm.value); // Close the dialog and pass data back
    }
  }

  cancel() {
    this.ref.close(); // Close the dialog without saving
  }

}
