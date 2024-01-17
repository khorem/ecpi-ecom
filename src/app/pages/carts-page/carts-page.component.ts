import { Component, OnInit } from '@angular/core';
import { Cart } from '../../core/models/cart';
import { CartService } from '../../core/services/cart.service';
import { CartEachComponent } from '../carts-each/carts-each.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carts-page',
  standalone: true,
  imports: [CartEachComponent],
  templateUrl: './carts-page.component.html',
  styleUrl: './carts-page.component.scss'
})
export class CartPageComponent implements OnInit {
  carts: Cart[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCarts().subscribe({
      next: (data: Cart[]) => {
        this.carts = data;
      },
      error: (err: any) => {
        console.error('Error fetching carts:', err);
      }
    });
  }
}
