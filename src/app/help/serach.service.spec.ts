/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerachService } from './serach.service';

describe('Service: Serach', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerachService]
    });
  });

  it('should ...', inject([SerachService], (service: SerachService) => {
    expect(service).toBeTruthy();
  }));
});