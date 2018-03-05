/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SomeService } from './some.service';

describe('Service: Some', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeService]
    });
  });

  it('should ...', inject([SomeService], (service: SomeService) => {
    expect(service).toBeTruthy();
  }));
});