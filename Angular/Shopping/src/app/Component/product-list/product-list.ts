import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) {}

  errorMessages: Map<number, string> = new Map(); // 🔴 Track errors per product

  get products() {
    return this.productService.products();
  }

  getQuantity(id: number): number {
    const item = this.cartService.cartItems().find(p => p.id === id);
    return item ? item.quantity : 0;
  }



  decrement(product: any) {
    const qty = this.getQuantity(product.id);
    if (qty > 0) {
      this.cartService.decrement(product.id);
      this.errorMessages.delete(product.id); // Optional: clear error on decrement
    }
  }

 increment(product: any) {
  const success = this.cartService.addToCart(product);
  if (!success) {
    this.errorMessages.set(product.id, `❗ Cannot add more "${product.name}" due to stock limit`);
  } else {
    this.errorMessages.delete(product.id); // ✅ Clear on success
  }
}

addToCart(product: any) {
  const success = this.cartService.addToCart(product);
  if (!success) {
    this.errorMessages.set(product.id, `❗ Cannot add more "${product.name}" due to stock limit`);
  } else {
    this.errorMessages.delete(product.id);
  }
}


  canAdd(product: any): boolean {
    const qtyInCart = this.cartService.getQuantityInCart(product.id);
    const available = product.stock - 10;
    return qtyInCart < 3 && qtyInCart < available;
  }

  isOutOfStock(product: any): boolean {
    return product.stock <= 10;
  }
}
