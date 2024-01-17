import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-food-app';
  foods: {
    name: string;
    price: number;
    description: string;
    imgUrl: string;
  }[] = [
    {
      name: 'Double Burger',
      description:
        'Double Burger Sandwiches, Frites & Pepsi, un repas gourmand et complet qui vous fera voyager. Vous pourrez déguster un burger au choix entre bœuf, poulet ou poisson, garni de fromage fondu, de salade croquante et de sauce au choix.',
      price: 9.72,
      imgUrl: 'https://intrax.wakafoodz.com/storage/1521_287_1.png',
    },
    {
      name: 'Big Bite Meal',
      description:
        'Trois délicieux morceaux de poulet croustillant, accompagnés d’une portion généreuse de frites dorées à souhait, une salade de chou fraîche et croquante, un riz moelleux et parfumé, un pain tout juste sorti du four, encore tiède, une sauce à l’ail délicieusement relevée, et un Coca glacé qui pétille de fraîcheur.',
      price: 15.24,
      imgUrl: 'https://intrax.wakafoodz.com/storage/Big%20bite%20meal.jpg',
    },
    {
      name: 'Family Bite',
      description:
        'Cinq savoureuses pièces de poulet croustillant, accompagnées de cinq tendres blancs de poulet, deux Zinger/filet pour une explosion de saveurs, trois Twist pour une touche épicée, une grande portion de frites dorées, trois pains moelleux, et trois Coca glacés qui pétillent de fraîcheur.',
      price: 54.96,
      imgUrl: 'https://intrax.wakafoodz.com/storage/Family%20bite.jpg',
    },
  ];
}
