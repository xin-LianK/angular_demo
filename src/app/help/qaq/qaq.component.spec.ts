/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QaqComponent } from './qaq.component';

describe('QaqComponent', () => {
  let component: QaqComponent;
  let fixture: ComponentFixture<QaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
