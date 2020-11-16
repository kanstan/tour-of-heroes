import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// public, private - has no effect on the generated JS. It is just a compile time tool that you can use to stop your TS code accessing things it shouldn't.
// 'export' changes visibility in JS - TODO: what exactly is changed there?
export class HeroesComponent implements OnInit { // has to always be exported -> app.module can import it -> 
  // -> app.module can then add it to decalrations -> can be used by all other stuff inside app module 
  
  selectedHero: Hero;

  heroes = HEROES;

  constructor() {  }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
