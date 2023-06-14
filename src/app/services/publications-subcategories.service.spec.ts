import { TestBed } from '@angular/core/testing';

import { PublicationsSubcategoriesService } from './publications-subcategories.service';

describe('PublicationsSubcategoriesService', () => {
  let service: PublicationsSubcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationsSubcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
