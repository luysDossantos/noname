import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { FileUpload } from 'primeng/fileupload';
import { TextareaModule } from 'primeng/textarea';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-cadastrar-instituicao-gestora',
    imports: [
        ReactiveFormsModule, DialogModule, Select, InputTextModule, ButtonModule, StepperModule,
        TextareaModule, CommonModule, FileUpload, HttpClientModule
    ],
    providers: [
        DialogService
    ],
    templateUrl: './cadastrar-instituicao-gestora.component.html',
    styleUrl: './cadastrar-instituicao-gestora.component.scss',
    standalone: true
})
export class CadastrarInstituicaoGestoraComponent {

  private fb = inject(FormBuilder);
  ref = inject(DynamicDialogRef);

  file: any;
  imagePreview: string | ArrayBuffer | null = null; // To store image as Base64 URL

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

  choose(event: any, callback: () => void) {
    callback();
  }

  onSelectedFiles(event: { currentFiles: any; }) {
    this.file = event.currentFiles[0];
    console.log(this.file)
    const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result; // Store Base64 URL
      };
      reader.readAsDataURL(this.file); 
    /* this.files.forEach((file: { size: any; }) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10; */
  }

}
