import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  constructor(public cartService: CartService) {}

  get cartItems() {
    return this.cartService.cartItems();
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increment(item: any) {
    if (item.quantity < 3 && item.stock >= 11) {
      this.cartService.increment(item.id);
    }
  }

  decrement(item: any) {
    this.cartService.decrement(item.id); // already removes if quantity goes to 0
  }

  removeItem(id: number) {
    this.cartService.remove(id);
  }
}
