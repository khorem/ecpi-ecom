import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../core/models/cart';
import { CommonModule } from '@angular/common';
import { UserService } from '../../core/services/user.service';


@Component({
  selector: 'app-carts-each',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carts-each.component.html',
  styleUrl: './carts-each.component.scss'
})
export class CartEachComponent implements OnInit {
  @Input() cart: Cart | undefined;
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.cart) {
      this.userService.getUserById(this.cart.userId).subscribe((userData: any) => {
        this.user = userData;
      });
    }
  }
}
