import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { RadioButton } from 'primeng/radiobutton';

@Component({
    selector: 'app-vincular-bolseiro',
    imports: [
        ReactiveFormsModule, DialogModule, Select, InputTextModule, ButtonModule, StepperModule,
        CommonModule, RadioButton
    ],
    templateUrl: './vincular-bolseiro.component.html',
    styleUrl: './vincular-bolseiro.component.scss',
    standalone: true
})
export class VincularBolseiroComponent {

  private fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);

  institutionForm = this.fb.group({
    title: [''],
    temGestor: [true],
    country: ['Parcial'],
    type: [''],
    coveragePercentage: [''],
    destination: [''],
    academicLevel: [''],
    vacancies: [''],
    fundingEntity: [''],
    startDate: [''],
    endDate: [''],
  });

  activeStep: number = 1;

  save() {
    if (this.institutionForm.valid) {
      console.log(this.institutionForm.value); // Send data to the backend or handle logic
      this.ref.close(this.institutionForm.value); // Close the dialog and pass data back
    }
  }

  cancel() {
    this.ref.close(); // Close the dialog without saving
  }

}
