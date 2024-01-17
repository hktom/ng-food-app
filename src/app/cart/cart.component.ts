import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input('items') foodSelected: {
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }[];
}
