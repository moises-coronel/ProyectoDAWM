import { TestBed } from '@angular/core/testing';

import { CharacterResService } from './character-res.service';

describe('CharacterResService', () => {
  let service: CharacterResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
