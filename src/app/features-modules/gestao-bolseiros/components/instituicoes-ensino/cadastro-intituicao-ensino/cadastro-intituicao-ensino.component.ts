import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-cadastro-intituicao-ensino',
    imports: [
        ReactiveFormsModule, DialogModule, Select, InputTextModule, ButtonModule
    ],
    providers: [
        DialogService
    ],
    templateUrl: './cadastro-intituicao-ensino.component.html',
    styleUrl: './cadastro-intituicao-ensino.component.scss',
    standalone: true
})
export class CadastroIntituicaoEnsinoComponent {

  private fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);

  institutionForm = this.fb.group({
    name: ['', Validators.required],
    acronym: ['', Validators.required],
    country: ['', Validators.required],
    province: ['', Validators.required],
    municipality: ['', Validators.required],
    address: [''],
    phone: [''],
    email: ['', [Validators.required, Validators.email]],
  });

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
