import { Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home.component';
import { previnRoutes } from './previn/previn.routes';
import { habcomNavRoutes } from './habcom/habcom.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'previn',
    loadChildren: () => import('./previn/previn.routes').then(m => m.previnRoutes),
  },
  {
    path: 'habcom',
    loadChildren: () => import('./habcom/habcom.routes').then(m => m.habcomRoutes),
  }
];
