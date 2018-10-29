import { TestBed, inject } from '@angular/core/testing';

import { HomepageServerConnectionService } from './homepage-server-connection.service';

describe('HomepageServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomepageServerConnectionService]
    });
  });

  it('should be created', inject([HomepageServerConnectionService], (service: HomepageServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
