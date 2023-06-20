import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';

describe('CartService', () => {
  let httpClient: HttpClient;
  const TESTDATA = [{ id: 1 }, { id: 2 }];

  let service: CartService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService],
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CartService);
  });

  it('should have the returned data in the cart', (done) => {
    let req = httpTestingController.expectOne('/api/cart');
    req.flush(TESTDATA);

    service.getCart().subscribe((data) => {
      expect(data.length).toEqual(2);
      done();
    });
  });
});
