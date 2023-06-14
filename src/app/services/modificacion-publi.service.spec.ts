import { TestBed } from '@angular/core/testing';

import { ModificacionPubliService } from './modificacion-publi.service';

describe('ModificacionPubliService', () => {
  let service: ModificacionPubliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificacionPubliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
