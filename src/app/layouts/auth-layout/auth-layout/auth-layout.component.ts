import { Component } from '@angular/core';
import { AuthFooterComponent } from '../../../components/components/auth-footer/auth-footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthNavComponent } from '../../../components/components/auth-nav/auth-nav.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [AuthFooterComponent, RouterModule, AuthNavComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
