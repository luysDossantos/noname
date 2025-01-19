import { Component } from '@angular/core';
import { ListaCandidaturasComponent } from "../lista-candidaturas/lista-candidaturas.component";
import { SearchBarComponent } from "../../../../shared/components/search-bar/search-bar.component";

@Component({
  selector: 'app-home-candidaturas',
  imports: [
    ListaCandidaturasComponent,
    SearchBarComponent
],
  templateUrl: './home-candidaturas.component.html',
  styleUrl: './home-candidaturas.component.scss'
})
export class HomeCandidaturasComponent {

}
