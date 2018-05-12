import { TestBed, inject, async } from '@angular/core/testing';

import { LifecycleService } from './lifecycle.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientBackendService } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('LifecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // no more boilerplate code w/ custom providers needed :-)
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [LifecycleService
      ]
    });
  });



  // it('should be created again', inject([HttpClient], (httpClient: HttpClient) => {

  //   })
  // );

  // it('should be created', 
  //   // 1. declare as async test since the HttpClient works with Observables
  //   async(
  //     // 2. inject HttpClient and HttpTestingController into the test
  //     inject([HttpClient, HttpTestingController], (httpClient: HttpClient, backend: HttpTestingController) => {

  //     })
  //   )
  // );
});
