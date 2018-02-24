import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from './../../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  hero: Hero;
  @ViewChild('heroForm') form: NgForm;
  private _submitMessage = '';
  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }

  onSubmit(form: NgForm) {
    this._submitMessage = 'Submitted. form value is ' + JSON.stringify(form.value);
  }

  constructor() { }

  ngOnInit() {
  }

  one(){
    console.log(1)
  }
  two(){
    console.log(2)
  }
}
