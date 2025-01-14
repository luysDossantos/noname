import { MembroComponent } from './features-modules/component/membros/membro/membro.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './features-modules/component/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './features-modules/component/layout/layout.component';



export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'Membros',
        component: MembroComponent
      }
    ]
  }

];
