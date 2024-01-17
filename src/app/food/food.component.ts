import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss',
})
export class FoodComponent implements OnInit {
  @Input() food: {
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  };

  @Output() foodSelectedEvent = new EventEmitter<{
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }>();

  foodSelected: boolean = false;
  quantity: number = 1;
  initialPrice: number;

  ngOnInit(): void {
    this.initialPrice = this.food.price;
  }

  onIncrement() {
    this.quantity++;
    this.updateFoodPrice();
  }

  onDecrement() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateFoodPrice();
    }
  }

  updateFoodPrice() {
    this.food.price = Math.floor(this.initialPrice * this.quantity);
  }

  onSelectFood() {
    this.foodSelected = !this.foodSelected;
    this.foodSelectedEvent.emit(this.food);
  }
}
