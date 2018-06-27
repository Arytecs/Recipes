import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Manzanas', 2)
  ];

  @Input() ingredientitem: Ingredient;


  constructor() { }

  ngOnInit() {
  }

}
