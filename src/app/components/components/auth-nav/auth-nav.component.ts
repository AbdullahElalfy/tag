import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './auth-nav.component.html',
  styleUrls: ['../../../../styles/shared-nav-style.css'],
})
export class AuthNavComponent {}
