import { TestBed, inject } from '@angular/core/testing';

import { ProfileServerConnectionService } from './profile-server-connection.service';

describe('ProfileServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileServerConnectionService]
    });
  });

  it('should be created', inject([ProfileServerConnectionService], (service: ProfileServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
