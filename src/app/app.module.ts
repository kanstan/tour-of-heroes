import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [ // make components, pipes etc. **from the current module** available to other directives in the current module
    AppComponent,
    HeroesComponent
  ],
  imports: [ // makes the exported declarations of **some other module** available in the current module
    BrowserModule // BrowserModule provides browser-specific services such as DOM rendering, sanitization, and location
  ],
  providers: [], // make these services and values known to DI -> can be injected everywhere in this module
  bootstrap: [AppComponent] // the root component that Angular creates and inserts into the index.html host web page
})
export class AppModule { }
