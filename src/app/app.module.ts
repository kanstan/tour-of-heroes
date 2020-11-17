import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [ // make components, pipes etc. **from the current module** available to other directives in the current module
    AppComponent,
    HeroesComponent,
    HeroDetailComponent // Every component must be declared in exactly one NgModule
  ],
  imports: [ // makes the exported declarations of **some other module** available in the current module, it is not enough to import on top
    BrowserModule, // BrowserModule provides browser-specific services such as DOM rendering, sanitization, and location
    FormsModule // we need this e.g. to be able to use ngModel in heroes.component.html
  ],
  providers: [], // make these services and values known to DI -> can be injected everywhere in this module
  bootstrap: [AppComponent] // the root component that Angular creates and inserts into the index.html host web page
})
export class AppModule { }
