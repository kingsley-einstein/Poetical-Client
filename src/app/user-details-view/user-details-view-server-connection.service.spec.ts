import { TestBed, inject } from '@angular/core/testing';

import { UserDetailsViewServerConnectionService } from './user-details-view-server-connection.service';

describe('UserDetailsViewServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailsViewServerConnectionService]
    });
  });

  it('should be created', inject([UserDetailsViewServerConnectionService], (service: UserDetailsViewServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
