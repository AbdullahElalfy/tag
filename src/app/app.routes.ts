import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    loadComponent: () =>
      import('./layouts/user-layout/user-layout/user-layout.component').then(
        (c) => c.UserLayoutComponent
      ),
    title: 'user',
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
