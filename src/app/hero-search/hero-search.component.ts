import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Hero} from '../hero';
import {debounceTime, distinctUntilChanged, flatMap, map, switchMap} from 'rxjs/operators';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // 1. map
      // map the value 'term' to Observable returned by searchHeroes, return this Observable
      // error: Type 'Observable<Observable<Hero[]>>' is not assignable to type 'Observable<Hero[]>'.
      // searchHeroes returns Observable (inner O.) -> gets wrapped into another Observable by map() (outer Observable)
      // -> returns Observable of Observable
      //
      // map(term => this.heroService.searchHeroes(term)),

      // 2. flatMap / mergeMap
      // this merges all the Observables inside into one Observable -> in our case inner and outer Observables are merged into one
      // this fixes the 'Observable of Observable' problem
      //
      // flatMap(term => this.heroService.searchHeroes(term)),
      // Problem with flatMap: response for `ABC` comes later and overwrites response for `ABCX`
      // A1: Request for `ABC`
      // A2: Response for `ABC` - e.g. takes longer time process than B1
      // B1: Request for `ABCX`
      // B2: Response for `ABCX`
      // --A1----------A2-->
      // ------B1--B2------>

      // 3. switchMap
      // Solution to flatMap problem: switchMap():
      // 1. A1 search observable (inner observable) is made and subscribed ('inner subscription')
      // 2. B1 search observable (inner observable) is made and subscribed
      //   -> A1 observable gets immediately cancelled and subscription is discarded
      // -> returns only the latest search service observable (= switchMap maintains only one inner subscription at a time!)
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
