import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails {
  product: any;
  productId: number;

  constructor(
    private route: ActivatedRoute,
    public cartService: CartService,
    public productService: ProductService
  ) {
    this.productId = +this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(this.productId);
  }

  get quantityInCart(): number {
    const item = this.cartService.cartItems().find(p => p.id === this.product.id);
    return item ? item.quantity : 0;
  }
get quantity(): number {
  return this.cartService.cartItems().find(i => i.id === this.product?.id)?.quantity || 0;
}

  increment() {
    if (this.quantityInCart < 3 && this.product.stock >= 11) {
      this.cartService.addToCart(this.product);
    }
  }

  decrement() {
    if (this.quantityInCart > 0) {
      this.cartService.decrement(this.product.id);
    }
  }

  addToCart() {
    if (this.quantityInCart === 0 && this.product.stock >= 11) {
      this.cartService.addToCart(this.product);
    }
  }

  canAdd(product: any): boolean {
  const qtyInCart = this.cartService.getQuantityInCart(product.id);
  return qtyInCart < 3 && product.stock > qtyInCart;
}

}
