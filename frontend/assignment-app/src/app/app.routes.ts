import { Routes } from '@angular/router';
import { ShipsGraphComponent } from './components/ships-graph/ships-graph.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'analytics', component: ShipsGraphComponent },
];
