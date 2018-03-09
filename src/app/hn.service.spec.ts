/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HnService } from './hn.service';

describe('Service: Hn', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HnService]
    });
  });

  it('should ...', inject([HnService], (service: HnService) => {
    expect(service).toBeTruthy();
  }));
});