import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input allows parent component to bind to this 'hero' property 
  // @Input() hero: Hero;
  hero: Hero;

  constructor(
    private route: ActivatedRoute, // holds information about the route to this instance
    private heroService: HeroService,
    private location: Location //  for the interaction with browser: e.g. to navigate back to the view that navigated here.
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // paramMap - dictionary of route parameter values extracted from URL
    const id = +this.route.snapshot.paramMap.get('id'); // JavaScript (+) operator converts the string to a number
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

}
