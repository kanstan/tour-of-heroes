import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

// path is URL's path; component - which component to load when URL with the 'path' is opened 
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // exports all RouterModule's stuff -> AppModule imports AppRoutingModule -> RouterModule's stuff is available throughout the app
})
export class AppRoutingModule { }
