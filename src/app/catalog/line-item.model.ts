import { IProduct } from './product.model';

export interface ILineItem {
  product: IProduct;
  qty: number;
}
