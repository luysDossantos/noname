import { Routes } from '@angular/router';
import { ListaInstituicoesEnsinoComponent } from './features-modules/gestao-bolseiros/components/instituicoes-ensino/lista-instituicoes-ensino/lista-instituicoes-ensino.component';
import { MainGestaoBolseirosComponent } from './features-modules/gestao-bolseiros/components/main-gestao-bolseiros/main-gestao-bolseiros.component';
import { PerfilInstituicaoEnsinoComponent } from './features-modules/gestao-bolseiros/components/instituicoes-ensino/perfil-instituicao-ensino/perfil-instituicao-ensino.component';
import { ListaBolseirosComponent } from './features-modules/gestao-bolseiros/components/bolseiros/lista-bolseiros/lista-bolseiros.component';
import { ListaBolsasComponent } from './features-modules/gestao-bolseiros/components/bolsas/lista-bolsas/lista-bolsas.component';
import { DetalheBolsaComponent } from './features-modules/gestao-bolseiros/components/bolsas/detalhe-bolsa/detalhe-bolsa.component';
import { ListaInstituicoesGestorasComponent } from './features-modules/gestao-bolseiros/components/instituicoes-gestora/lista-instituicoes-gestoras/lista-instituicoes-gestoras.component';
import { DetalheInstituicaoGestoraComponent } from './features-modules/gestao-bolseiros/components/instituicoes-gestora/detalhe-instituicao-gestora/detalhe-instituicao-gestora.component';
import { concursoRoutes } from './features-modules/gestao-de-concurso/concurso.routes';
import { ListaTipoBolsaComponent } from './features-modules/gestao-bolseiros/components/tipo-de-bolsas/lista-tipo-de-bolsas/lista-tipo-de-bolsas.component';
import { DashboardComponent } from './features-modules/dashboard/dashboard.component';
import { MainProfissionaisSectorComponent } from './features-modules/profissionais-sector/main-profissionais-sector/main-profissionais-sector.component';
import { ListaEmpresasComponent } from './features-modules/profissionais-sector/components/empresa/lista-empresas/lista-empresas.component';

export const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  },

  {
    path: 'profissionais-sector',
    component: MainProfissionaisSectorComponent,
    children: [
      {
        path: 'empresa',
        children: [
          {
            path: '',
            component: ListaEmpresasComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'gestao-bolseiros',
    component: MainGestaoBolseirosComponent,
    children: [
      {
        path: 'instituicao-ensino',
        children: [
          {
            path: '',
            component: ListaInstituicoesEnsinoComponent,
          },
          {
            path: 'detalhe-instituicao',
            component: PerfilInstituicaoEnsinoComponent,
          },
        ],
      },
      {
        path: 'bolseiros',
        children: [
          {
            path: '',
            component: ListaBolseirosComponent,
          },
          /* {
                        path: "perfil-instituicao",
                        component: PerfilInstituicaoEnsinoComponent
                    }, */
        ],
      },
      {
        path: 'bolsas',
        children: [
          {
            path: '',
            component: ListaBolsasComponent,
          },
          {
            path: 'detalhe-bolsa',
            component: DetalheBolsaComponent,
          },
        ],
      },
      {
        path: 'empresa-gestora',
        children: [
          {
            path: '',
            component: ListaInstituicoesGestorasComponent,
          },
          {
            path: 'detalhe-empresa',
            component: DetalheInstituicaoGestoraComponent,
          },
        ],
      },
      {
        path: 'tipo-bolsa',
        children: [
          {
            path: '',
            component: ListaTipoBolsaComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'gestao-concurso',
    children: [...concursoRoutes],
  },
];
