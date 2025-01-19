import { Routes } from "@angular/router";
import { HomeConcursosComponent } from "./concurso/components/home-concursos/home-concursos.component";
import { CadastrarConcursoComponent } from "./concurso/components/cadastrar-concurso/cadastrar-concurso.component";
import { ParametrizarConcursoComponent } from "./concurso/components/parametrizar-concurso/parametrizar-concurso.component";
import { HomeCandidaturasComponent } from "./candidaturas/home-candidaturas/home-candidaturas.component";

export const concursoRoutes: Routes = [
    {
        path: 'concurso',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: HomeConcursosComponent
            },
            {
                path: 'atualizar/:id',
                component: CadastrarConcursoComponent
            },
            {
                path: 'cadastrar',
                component: CadastrarConcursoComponent
            },
            {
                path: 'parametrizar/:id',
                component: ParametrizarConcursoComponent
            },

        ]
    },
    {
        path: 'candidaturas', 
        children: [
            {
                path: '',
                component: HomeCandidaturasComponent
            }
        ]
    }
]