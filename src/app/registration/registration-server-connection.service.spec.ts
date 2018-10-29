import { TestBed, inject } from '@angular/core/testing';

import { RegistrationServerConnectionService } from './registration-server-connection.service';

describe('RegistrationServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationServerConnectionService]
    });
  });

  it('should be created', inject([RegistrationServerConnectionService], (service: RegistrationServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
