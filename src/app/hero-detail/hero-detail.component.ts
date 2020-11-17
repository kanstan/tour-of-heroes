import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input allows parent component to bind to this 'hero' property 
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}