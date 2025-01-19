import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card-person',
    imports: [],
    templateUrl: './card-person.component.html',
    styleUrl: './card-person.component.scss',
    standalone: true
})
export class CardPersonComponent {
  name = input();
  avatar = input();
  estado = input();
  age = input();
  country = input();
  duration = input();
}
