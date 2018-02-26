/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContantComponent } from './contant.component';

describe('ContantComponent', () => {
  let component: ContantComponent;
  let fixture: ComponentFixture<ContantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
