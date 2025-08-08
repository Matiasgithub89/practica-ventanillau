import { Routes } from "@angular/router";
import { PrimerComponenteprevinComponent } from "./pages/primerComponenteprevin/primerComponenteprevin.component";
import { HomeComponent } from "../shared/components/home/home.component";
import { NavRoute } from "../shared/interfaces/nav-route.model";

export const previnRoutes: Routes = [
   {
    path: 'primer-previn',
    loadComponent: () =>import('./pages/primerComponenteprevin/primerComponenteprevin.component').then(m => m.PrimerComponenteprevinComponent)
    },
];
export const previnNavRoutes: NavRoute[] = [
  {
    label: 'PREVIN - Primer componente',
    path: 'previn/primer-previn',
    seccion: 'previn'
  },
];
