import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card-empresa',
    imports: [CommonModule],
    templateUrl: './card-empresa.component.html',
    styleUrl: './card-empresa.component.scss',
    standalone: true
})
export class CardEmpresaComponent {
  logo = input<string>()
  name = input<string>()
  description = input<string>()
  country = input<string>()
  phone = input<string>()
  email = input<string>()
}
