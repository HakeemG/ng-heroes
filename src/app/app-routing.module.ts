import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full'},
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Details/:id', component: HeroDetailsComponent },
  { path: 'Heroes', component: HeroesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
