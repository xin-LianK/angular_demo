import { Component, OnInit } from '@angular/core';
import { PopcornService } from './popcorn.service';
import * as _ from "lodash";

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers: [PopcornService],
  animations:[
    trigger('animRoutes', [
      transition('* <=> *', [
        group([
          query(
            ':enter',
            [
              style({
                opacity: 0,
                transform: 'translateY(9rem) rotate(-10deg)'
              }),
              animate(
                '0.35s cubic-bezier(0, 1.8, 1, 1.8)',
                style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
              ),
              animateChild()
            ],
            { optional: true }
          ),
          query(
            ':leave',
            [animate('0.35s', style({ opacity: 0 })), animateChild()],
            { optional: true }
          )
        ])
      ])
    ])
  ],
})
export class HelpComponent implements OnInit {
  title = "what the fuck";
  price = "100";
  someDate = '1980-12-30';
  fruits = ['banana', 'oranges', 'apple', 'kiwis'];
  currentStory: string = 'The Fox Without a Tail';
  mainCharacter: string = 'Henry';
  outputStr: string = '';
  constructor(private popcorn: PopcornService) { }

  ngOnInit() {
    console.log(_.chunk(this.fruits, 2));
  }

  getOutputStr(outputStr) {
    this.outputStr = outputStr;
  }
  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }
  getPage(outlet){
    return outlet.activatedRouteData['page'] || 'one';
  }

}
