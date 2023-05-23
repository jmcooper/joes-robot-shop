import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  constructor(private http: HttpClient) {}

  add(product: IProduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(() => {
      console.log('added ' + product.name + ' to cart!');
    });
  }
}
