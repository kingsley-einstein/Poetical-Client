import { TestBed, inject } from '@angular/core/testing';

import { AdminDashboardServerConnectionService } from './admin-dashboard-server-connection.service';

describe('AdminDashboardServerConnectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDashboardServerConnectionService]
    });
  });

  it('should be created', inject([AdminDashboardServerConnectionService], (service: AdminDashboardServerConnectionService) => {
    expect(service).toBeTruthy();
  }));
});
