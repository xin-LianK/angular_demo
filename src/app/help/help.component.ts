import { Component, OnInit } from '@angular/core';
import { PopcornService } from './popcorn.service';
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
  constructor(private popcorn: PopcornService) { }

  ngOnInit() {
  }

  cookIt(qty) {
    this.popcorn.cookPopcorn(qty);
  }

}
