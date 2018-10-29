import { TestBed, inject } from '@angular/core/testing';

import { PoemDetailsServerConnectionService } from './poem-details-server-connection.service';

describe('PoemDetailsServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemDetailsServerConnectionService]
    });
  });

  it('should be created', inject([PoemDetailsServerConnectionService], (service: PoemDetailsServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
