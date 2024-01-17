import { Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CategoriesComponent} from "./pages/categories/categories.component";
import { CartPageComponent } from './pages/carts-page/carts-page.component';

export const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'carts', component: CartPageComponent },
  { path: 'category/:id', component: CategoriesComponent },
  { path: '', redirectTo: 'products', pathMatch:  'full' },
  { path: '**', component: PageNotFoundComponent },
];
