import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable: Decorator that marks a class as available to be provided and injected as a dependency.
// HeroService is the provider of its service
@Injectable({
  providedIn: 'root' // registered the service provider (HeroService) with root injector ->  Angular creates a single, shared instance of HeroService 
  // and injects into any class that asks for it.
})
export class HeroService {

  // :base/:collectionName
  // 'heroes' data object in the in-memory-data-service.ts
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    // return of(HEROES); // comes from mock-heroes.ts
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    this.log(`fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
