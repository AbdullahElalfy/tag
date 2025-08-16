import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-nav.component.html',
  styleUrls: [
    '../../../../styles/shared-nav-style.css',
    './user-nav.component.css',
  ],
})
export class UserNavComponent {}
