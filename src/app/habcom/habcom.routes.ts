import { Routes } from "@angular/router";
import { PrimerComponenteHabcomComponent } from "./pages/primerComponenteHabcom/primerComponenteHabcom.component";
import { NavRoute } from "../shared/interfaces/nav-route.model";

export const habcomRoutes: Routes = [
  {
    path: 'primer-habcom',
    loadComponent: () => import('./pages/primerComponenteHabcom/primerComponenteHabcom.component').then(
      (m) => m.PrimerComponenteHabcomComponent),
   }
];
export const habcomNavRoutes: NavRoute[] = [
  {
    label: 'HABCOM - Primer componente',
    path: 'habcom/primer-habcom',
    seccion: 'habcom'
  },
];
