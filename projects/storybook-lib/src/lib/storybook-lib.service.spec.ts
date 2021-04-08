import { TestBed } from '@angular/core/testing';

import { StorybookLibService } from './storybook-lib.service';

describe('StorybookLibService', () => {
  let service: StorybookLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorybookLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
