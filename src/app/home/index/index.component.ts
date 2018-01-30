import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

// import { AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
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


  currentHero: Hero;
  name: string = Hero.heroes[0].name;
  hero: Hero;
  heroes: Hero[];

  delete = false;


  fontSizePx: number = 20;
  //   EventEmitter
  @Input() size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();


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
    // this.heroesWithTrackByCountReset = 0;
  }


  deleteHero(hero: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}`);
  }
  deleteThis() {
    this.deleteRequest.emit(this.hero);
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
