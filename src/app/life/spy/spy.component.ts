import { Component, OnInit } from '@angular/core';
import { LoggerService } from './../logger.service';

import { Hero } from './../../hero';
@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css'],
  providers: [LoggerService]
})
export class SpyComponent implements OnInit {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];
  spyLog: string[];
  constructor(private logger: LoggerService) {
    this.spyLog = this.logger.logs;
  }

  ngOnInit() { }
  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }
  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }
  reset() {
    this.logger.log('-- reset --');
    this.heroes.length = 0;
    this.logger.tick();
  }

}
