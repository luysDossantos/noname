import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { dateRangeValidator } from '@validators/date-range.validator';
import { TipoBolsaService } from '../../api/services';
import { TipoBolsa } from '../../api/models/tipo-bolsa.model';
import { ApiService } from '@core/providers/http';

@Component({
  selector: 'app-cadatrar-bolsa',
  imports: [
    ReactiveFormsModule,
    DialogModule,
    Select,
    InputTextModule,
    ButtonModule,
    StepperModule,
    CommonModule,
  ],
  providers: [DynamicDialogRef, FormBuilder, TipoBolsaService, ApiService],
  templateUrl: './cadatrar-bolsa.component.html',
  styleUrl: './cadatrar-bolsa.component.scss',
  standalone: true,
})
export class CadatrarBolsaComponent {
  tipoBolsa: TipoBolsa[] = [];
  private fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);
  tipoBolsaSerice = inject(TipoBolsaService);

  institutionForm = this.fb.group(
    {
      title: ['', Validators.required],
      financialCoverage: ['Parcial', Validators.required],
      type: ['', Validators.required],
      coveragePercentage: [
        '',
        [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      destination: ['', Validators.required],
      academicLevel: ['', Validators.required],
      vacancies: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(1),
        ],
      ],
      fundingEntity: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    },
    { validators: dateRangeValidator('startDate', 'endDate') }
  );

  activeStep: number = 1;

  save() {
    if (this.institutionForm.valid) {
      this.ref.close(this.institutionForm); // Close the dialog and pass data back
    }
  }

  loadTipoBolsas() {
    this.tipoBolsaSerice.list().subscribe(
      (data) => {
        this.tipoBolsa = data;
      },
      (error) => {
        console.error('Erro ao buscar tipos de bolsa:', error);
      }
    );
  }

  cancel() {
    this.ref.close(); // Close the dialog without saving
  }
}
