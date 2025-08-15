import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { authGuradGuard } from './core/gurads/auth-gurad.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),
    title: 'Sign Up',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'Log In',
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./pages/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
        title: 'Sign Up',
      },
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/user-layout/user-layout/user-layout.component').then(
        (c) => c.UserLayoutComponent
      ),
    title: 'user',
    canActivate: [authGuradGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Home',
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart.component').then((c) => c.CartComponent),
        title: 'Cart',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/products/products.component').then(
            (c) => c.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('./pages/details/details.component').then(
            (c) => c.DetailsComponent
          ),
        title: 'Details',
      },
    ],
  },
  { path: '**', component: NotFoundComponent, title: 'Erorr 404' },
];
