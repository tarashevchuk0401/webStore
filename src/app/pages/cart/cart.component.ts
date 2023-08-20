import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/Cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'string',
        price: 1,
        quantity: 21,
        id: 545,
      }
    ]
  }
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product', 'name', 'price', 'quantity', 'total', 'action'
  ]

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(item => item.price * item.quantity)
      .reduce((accum, curr) => accum + curr, 0);

  }

}
