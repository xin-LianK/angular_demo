/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EasyModalComponent } from './easy-modal.component';

describe('EasyModalComponent', () => {
  let component: EasyModalComponent;
  let fixture: ComponentFixture<EasyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
