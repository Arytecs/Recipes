import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Tarta de chocolate', 'Tarta sacher de chocolate negro', 'https://www.hogarmania.com/archivos/201612/tarta-sacher-chocolate-receta-2-416x236x80xX.jpg'),
    new Recipe('Arroz al horno', 'Receta de aprovechamiento', 'https://www.hogarmania.com/archivos/201512/5678-1-arroz-al-horno-1063-xl-848x477x80xX.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }


  onRecipeSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }
}
