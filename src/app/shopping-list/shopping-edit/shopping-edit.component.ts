import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent implements OnInit {
  
  public ingredient: Ingredient;
  public cantidadIng: number;
  public nombreIng: string;

  onIngredient(){
    this.ingredient = new Ingredient(this.nombreIng,this.cantidadIng);
    console.dir(this.ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
