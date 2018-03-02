import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { SignupService } from './signup.service';
import { validateValue } from '@angular/flex-layout';
import { ValidateEmailNotTaken } from './index/async-email.validator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder, private signup: SignupService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email], ValidateEmailNotTaken.createValidator(this.signup)]
    });
  }

}
