import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavRoute } from '../../interfaces/nav-route.model';
import { previnNavRoutes } from '../../../previn/previn.routes';
import { habcomNavRoutes } from '../../../habcom/habcom.routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
   allRoutes: NavRoute[] = [...previnNavRoutes, ...habcomNavRoutes];

  previnRoutes = this.allRoutes.filter(r => r.seccion === 'previn');
  habcomRoutes = this.allRoutes.filter(r => r.seccion === 'habcom');
 }
