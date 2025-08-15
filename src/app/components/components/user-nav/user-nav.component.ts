import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserDataService } from '../../../core/services/user-data.service';
import { AuthService } from '../../../core/services/auth.service';
import { CartService } from '../../../core/services/cart.service';

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
export class UserNavComponent {
  username: string = '';
  constructor(
    private _userdata: UserDataService,
    private _auth: AuthService,
    private router: Router,
    private _cartService: CartService
  ) {}
  getUserName() {
    this._userdata.userName.subscribe((next) => (this.username = next));
  }
  ngOnInit(): void {
    this.getUserName();
  }
  logout(): void {
    this._auth.logOut().subscribe((next) => {
      this._cartService.clearCart();
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      this.router.navigate(['auth/login']);
    });
  }
}
