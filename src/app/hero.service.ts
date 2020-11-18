import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

// @Injectable: Decorator that marks a class as available to be provided and injected as a dependency.
// HeroService is the provider of its service
@Injectable({
  providedIn: 'root' // registered the service provider (HeroService) with root injector ->  Angular creates a single, shared instance of HeroService 
  // and injects into any class that asks for it.
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
