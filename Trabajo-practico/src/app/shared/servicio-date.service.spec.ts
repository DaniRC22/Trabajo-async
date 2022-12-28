import { TestBed } from '@angular/core/testing';

import { ServicioDateService } from './servicio-date.service';

describe('ServicioDateService', () => {
  let service: ServicioDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
