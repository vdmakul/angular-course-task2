import { TestBed, inject } from '@angular/core/testing';

import { GithubInterceptorService } from './github-interceptor.service';

describe('GithubInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubInterceptorService]
    });
  });

  it('should be created', inject([GithubInterceptorService], (service: GithubInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
