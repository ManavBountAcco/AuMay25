import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { CartService } from './services/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  currentTitle = 'All Products';

  constructor(
    private router: Router,
    public cartService: CartService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      if (url === '/') {
        this.currentTitle = 'All Products';
      } else if (url.startsWith('/product')) {
        this.currentTitle = 'Product Details';
      } else if (url.startsWith('/cart')) {
        this.currentTitle = 'Your Cart';
      } else {
        this.currentTitle = 'Shopping';
      }
    });
  }

  get cartCount(): number {
    return this.cartService.cartItems()
      .reduce((sum, item) => sum + item.quantity, 0);
  }
}

