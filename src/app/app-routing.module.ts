import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

// path is URL's path; component - which component to load when URL with the 'path' is opened
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect route
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent } // parameterized route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exports all RouterModule's stuff -> AppModule imports AppRoutingModule ->
  // -> RouterModule's stuff is available throughout the app
})
export class AppRoutingModule { }
