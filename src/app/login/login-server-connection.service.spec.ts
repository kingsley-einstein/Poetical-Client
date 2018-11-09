import { TestBed, inject } from '@angular/core/testing';

import { LoginServerConnectionService } from './login-server-connection.service';

describe('LoginServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServerConnectionService]
    });
  });

  it('should be created', inject([LoginServerConnectionService], (service: LoginServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
