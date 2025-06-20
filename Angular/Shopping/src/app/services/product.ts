import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = signal([
    { id: 1, name: 'iPhone 15', price: 799, stock: 11 },
    { id: 2, name: 'Samsung Galaxy S24', price: 699, stock: 9 },
    { id: 3, name: 'Pixel 8', price: 599, stock: 20 },
    { id: 4, name: 'Nothing Phone 2a', price: 349, stock: 8 }
  ]);

  getProductById(id: number) {
    return this.products().find(p => p.id === id);
  }
}
