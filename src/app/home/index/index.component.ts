import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Hero } from '../../hero';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  animal: string;
  test = 'text-danger';
  what: boolean;
  toggle = true;
  inputText = '我是谁？';



  // trackBy change counting
  heroesNoTrackByCount = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;



  currentHero: Hero;
  name: string = Hero.heroes[0].name;
  hero: Hero;
  heroes: Hero[];

  delete = false;

  fontSizePx: number = 20;
  //   EventEmitter
  @Input() size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();
  @ViewChildren('noTrackBy') heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;

  deleteRequest = new EventEmitter<Hero>();
  lineThrough = '';

  canSave = true;
  isUnchanged = false;
  isSpecial = false;

  // ngClass
  currentClasses: {};
  setCurrentClasses() {
    this.currentClasses = {
      'color': this.canSave ? 'red' : 'blue',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '30px' : '18px'
    };
  }

  // ngStyle
  // currentStyles: {};
  // setcurrentStyles() {
  //   this.currentStyles = {
  //     'font-style': this.canSave ? 'italic' : 'normal',
  //     'font-weight': !this.isUnchanged ? 'bold' : 'normal',
  //     'font-size': this.isSpecial ? '24px' : '12px'
  //   };
  // }
  alert(msg?: string) { window.alert(msg); }
  callFax(value: string) { this.alert(`Faxing ${value} ...`); }
  callPhone(value: string) { this.alert(`Calling ${value} ...`); }

  constructor() {
  }

  ngOnInit() {
    this.resetHeroes();
  }
  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy, () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  changeOn() {
    this.what = true;
    this.test = 'text-info';
  }
  changeOff() {
    this.what = false;
    this.test = null;
  }
  toggleChange() {
    this.toggle = !this.toggle;
  }

  onSave(event: KeyboardEvent) {
    const evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); } //////////////////////////////////////////////////////////////////////////////////
  }

  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }
  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }
  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }


  deleteHero(hero: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}`);
  }
  deleteThis() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
    const changedRefs = changes.toArray();
    // Check if every changed Element is the same as old and in the same position
    const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
    if (!isSame) {
      oldRefs = changedRefs;
      // wait a tick because called after views are constructed
      setTimeout(changed, 0);
    }
  });
}
