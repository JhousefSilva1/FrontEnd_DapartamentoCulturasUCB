import { TestBed } from '@angular/core/testing';

import { MispublicacionesService } from './mispublicaciones.service';

describe('ModificacionesService', () => {
  let service: MispublicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MispublicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
