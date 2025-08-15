import { Component } from '@angular/core';
import { UserNavComponent } from '../../../components/components/user-nav/user-nav.component';
import { UserFooterComponent } from '../../../components/components/user-footer/user-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [UserNavComponent, UserFooterComponent, RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css',
})
export class UserLayoutComponent {}
