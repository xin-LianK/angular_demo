import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userName = "Bob";
  email: string;
  nickName: string;
  password: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}
