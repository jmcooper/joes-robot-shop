import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];

  constructor() {}

  add(product: IProduct) {
    this.cart.push(product);

    console.log('added ' + product.name + ' to cart!');
  }
}
