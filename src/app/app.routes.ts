import { Routes } from '@angular/router';
import { DashboardComponent } from './features-modules/component/dashboard/dashboard.component';
import { MembroComponent } from './features-modules/component/membros/membro/membro.component';
import { AlunosComponent } from './features-modules/component/academia/alunos/alunos.component';
import { TurmasComponent } from './features-modules/component/academia/turmas/turmas.component';

export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "Membros",
        component: MembroComponent,
      },
      {
      path: "Academia",
      children: [
        {
          path: "Alunos",
          component: AlunosComponent
        },
        {
          path: "Turamas",
          component: TurmasComponent
        },
      ]

    }
    ]
  }

];
