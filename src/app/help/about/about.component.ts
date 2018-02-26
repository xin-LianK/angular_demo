import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('itemAnim', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  items = ['what'];
  pipeStr = 'abcdefg';
  constructor() { }

  ngOnInit() {
  }

  addItem(value: string) {
    if(value === ''){
      return;
    }
    this.items.push(value);
  }
  removeItem(value) {
    let index = this.items.indexOf(value);
    this.items.splice(index,1);
  }
}
