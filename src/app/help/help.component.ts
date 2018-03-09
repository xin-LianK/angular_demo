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
    trigger('animRoutes', [//触发器应用于在应用程序组件模板中封装路由器插座的div。
      transition('* <=> *', [//然后我们将任何状态的转换定义为任何状态（'* <=> *'），以便每个路由更改生成相同的动画。我们可以为不同的状态定义多个转换。例如，从第一页到第二页：'one => two'，或者从第二页到第一页：'two => one'。
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
            { optional: true }//我们将{ optional：true}添加到我们的查询组中，以便在没有任何内容需要查询时Angular不会跳闸。
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
