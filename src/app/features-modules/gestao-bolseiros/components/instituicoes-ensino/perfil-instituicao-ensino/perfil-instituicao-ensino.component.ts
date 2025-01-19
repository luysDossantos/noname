import { Component } from '@angular/core';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { ButtonModule } from 'primeng/button';
import { TabsModule } from 'primeng/tabs';
import { ListaCursosComponent } from '../../cursos/lista-cursos/lista-cursos.component';

@Component({
    selector: 'app-perfil-instituicao-ensino',
    imports: [
        BackButtonComponent, ButtonModule, TabsModule, ListaCursosComponent
    ],
    templateUrl: './perfil-instituicao-ensino.component.html',
    styleUrl: './perfil-instituicao-ensino.component.scss',
    standalone: true
})
export class PerfilInstituicaoEnsinoComponent {

  universityName = 'UCAN';
  universityDetails = 'Universidade Católica de Angola';
  location = 'Angola';
  phone = '(+244) 222 010 916';
  email = 'geral@ucan.ao';
  courseCount = 9;

}

