import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // @override
  createDb(reqInfo?: RequestInfo): {} | Observable<{}> | Promise<{}> {

    // collection 'heroes' -> can be fetched with URL 'api/heroes''
    const heroes: Hero[] = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }

  // @override
  genId(heroes: Hero[]): number {
    const initialId = 11;
    if (heroes.length === 0) {
      return initialId;
    } else {
      return Math.max(...heroes.map(hero => hero.id)) + 1;
    }
  }
}
