import { TestBed, inject } from '@angular/core/testing';

import { ResetPasswordServerConnectionService } from './reset-password-server-connection.service';

describe('ResetPasswordServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResetPasswordServerConnectionService]
    });
  });

  it('should be created', inject([ResetPasswordServerConnectionService], (service: ResetPasswordServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
