/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopcornService } from './popcorn.service';

describe('Service: Popcorn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopcornService]
    });
  });

  it('should ...', inject([PopcornService], (service: PopcornService) => {
    expect(service).toBeTruthy();
  }));
});