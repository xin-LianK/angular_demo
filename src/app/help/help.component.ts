import { Component, OnInit } from '@angular/core';
import { PopcornService } from './popcorn.service';
import * as _ from "lodash";
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
  providers: [PopcornService]
})
export class HelpComponent implements OnInit {
  title = "what the fuck";
  price = "100";
  someDate = '1980-12-30';
  fruits = ['banana', 'oranges', 'apple', 'kiwis'];
  currentStory: string = 'The Fox Without a Tail';
  mainCharacter: string = 'Henry';
  constructor(private popcorn: PopcornService) { }

  ngOnInit() {
    console.log(_.chunk(this.fruits, 2));
  }

  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }

}
