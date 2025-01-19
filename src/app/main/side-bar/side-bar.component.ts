import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-side-bar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.scss',
    standalone: true
})
export class SideBarComponent {

}
