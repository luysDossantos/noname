import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-back-button',
    imports: [],
    templateUrl: './back-button.component.html',
    styleUrl: './back-button.component.scss',
    standalone: true
})
export class BackButtonComponent {

  location = inject(Location);

  goBack(): void {
    this.location.back();
  }

}
