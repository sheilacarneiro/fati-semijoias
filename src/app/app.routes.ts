import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryBaseComponent } from './pages/category/category-base.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'categorias/brincos', component: CategoryBaseComponent, data: { category: 'Brincos' } },
  { path: 'categorias/aneis', component: CategoryBaseComponent, data: { category: 'Anéis' } },
  { path: 'categorias/correntes', component: CategoryBaseComponent, data: { category: 'Correntes' } },
  { path: 'categorias/pulseiras', component: CategoryBaseComponent, data: { category: 'Pulseiras' } },
  { path: 'categorias/pingentes', component: CategoryBaseComponent, data: { category: 'Pingentes' } }
];
