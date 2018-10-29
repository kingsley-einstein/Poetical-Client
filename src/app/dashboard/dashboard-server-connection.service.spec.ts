import { TestBed, inject } from '@angular/core/testing';

import { DashboardServerConnectionService } from './dashboard-server-connection.service';

describe('DashboardServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardServerConnectionService]
    });
  });

  it('should be created', inject([DashboardServerConnectionService], (service: DashboardServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
