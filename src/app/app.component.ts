import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './main/top-bar/top-bar.component';
import { SideBarComponent } from './main/side-bar/side-bar.component';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from './core/components/loading/loading.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TopBarComponent,
    SideBarComponent,
    Toast,
    LoadingComponent
  ], 
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'admin-frontend-bolsa-de-profissionais';
}
