import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from './../../hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // size: number | string;
  title = 'what';
  hero: Hero; // defined to demonstrate template context precedence
  heroes: Hero[];
  currentHero: Hero;
  @Input() size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();
  constructor() {
   }

  ngOnInit() {
    this.resetHeroes();
  }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(i: number) {
    this.size = Math.min(40, Math.max(8, + this.size + i));
    this.sizeChange.emit(this.size);
  }

  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
  }
}
