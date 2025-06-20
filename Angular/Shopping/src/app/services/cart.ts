import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<any[]>([]);

 addToCart(product: any): boolean {
  const items = this.cartItems();
  const existing = items.find(p => p.id === product.id);
  const qtyInCart = existing ? existing.quantity : 0;
  const available = product.stock - 10;

  if (qtyInCart >= 3 || qtyInCart >= available) {
    return false; // ❌ Limit hit
  }

  if (existing) {
    existing.quantity++;
    this.cartItems.set([...items]);
  } else if (product.stock > 10) {
    this.cartItems.set([...items, { ...product, quantity: 1 }]);
  }

  return true; // ✅ Added
}




 increment(productId: number) {
  this.cartItems.update(items =>
    items.map(item => {
      const available = item.stock - 10;
      if (item.id === productId && item.quantity < 3 && item.quantity < available) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    })
  );
}


  decrement(productId: number) {
    this.cartItems.update(items =>
      items
        .map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }

  remove(productId: number) {
    this.cartItems.set(this.cartItems().filter(i => i.id !== productId));
  }

  getQuantityInCart(productId: number): number {
    return this.cartItems().find(p => p.id === productId)?.quantity || 0;
  }
}
