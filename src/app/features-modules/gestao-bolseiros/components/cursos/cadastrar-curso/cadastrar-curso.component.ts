import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
    selector: 'app-cadastrar-curso',
    imports: [
        ReactiveFormsModule, DialogModule, Select, InputTextModule, ButtonModule
    ],
    templateUrl: './cadastrar-curso.component.html',
    styleUrl: './cadastrar-curso.component.scss',
    standalone: true
})
export class CadastrarCursoComponent {

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
