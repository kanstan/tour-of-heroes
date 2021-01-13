import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// module is just a register of components, pipes etc, used in this module
@NgModule({
  declarations: [ // make components, pipes etc. **from the current module** available to other directives in the current module
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent // Every component must be declared in exactly one NgModule
  ],
  imports: [ // makes the *exported* components, pipes etc. of **some other module** available in the current module
    BrowserModule, // BrowserModule provides browser-specific services such as DOM rendering, sanitization, and location
    FormsModule, // FormsModule provides e.g. to be able to use ngModel in heroes.component.html
    AppRoutingModule,
    HttpClientModule,
    // intercepts HTTP requests and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [], // makes these services and values known to DI system -> can be injected everywhere in this module
  bootstrap: [AppComponent] // the root component that Angular creates and inserts into the index.html host web page
})
export class AppModule { }
