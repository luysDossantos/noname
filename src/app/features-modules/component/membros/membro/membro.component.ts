import { Component } from '@angular/core';
import { RouterLink, RouterOutlet  } from '@angular/router';

@Component({
  selector: 'app-membro',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './membro.component.html',
  styleUrl: './membro.component.css',
  standalone: true
})
export class MembroComponent {

}
