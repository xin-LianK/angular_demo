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
  publishedDate:'1920-12-31'
  users: ['one', 'two', 'three', 'four'];
  user = {
    name: "Bob",
    gender: 'm',
    avatar: 'what',
    newUser: 'Pick',
    color:'lightbule',
    preferences: {
      nickName: true,
      color: 'red'
    },
  }
  setClasses() {
    const classes = {
      'has-avatar': this.user.avatar, 'new-user': this.user.newUser, bg: this.user.preferences.color
    }; return classes;
  }
  userStyles = {
    backgroundColor: 'papayawhip', border: '2px solid #666', width: '50%', margin: '0 auto', textAlign: 'center',
    padding: '2rem'
  };
  constructor() { }

  ngOnInit() {
  }
  printValue(){
    console.log(1)
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }

}
