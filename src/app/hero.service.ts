import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// @Injectable: Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root' // registered with root injector ->  Angular creates a single, shared instance of HeroService 
  // and injects into any class that asks for it.
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
