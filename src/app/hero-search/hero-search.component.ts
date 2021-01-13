import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Hero} from '../hero';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
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

      // Map to observable, complete previous inner observable, emit values
      // (cancels and discards previous search observables, returning only the latest search service observable)
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  // push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

}
