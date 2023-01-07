import { TestBed } from '@angular/core/testing';

import { CharacterResourcesService } from './character-resources.service';

describe('CharacterResourcesService', () => {
  let service: CharacterResourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterResourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
