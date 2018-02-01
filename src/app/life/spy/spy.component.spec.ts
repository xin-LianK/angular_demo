/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpyComponent } from './spy.component';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
