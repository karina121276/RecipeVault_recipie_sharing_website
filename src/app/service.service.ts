import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  shortDescription: string;
  ingredients: string[];
  instructions: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // constructor() { }
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Creamy Pasta',
      shortDescription: 'Delicious creamy garlic pasta',
      ingredients: ['Pasta', 'Cream', 'Garlic', 'Parmesan'],
      instructions: 'Boil pasta. Make sauce with cream & garlic. Mix & serve.'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      shortDescription: 'Classic cheesy pizza',
      ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella', 'Basil'],
      instructions: 'Spread sauce on dough, add cheese & basil, bake until crispy.'
    }
  ];

  // ✅ Get all recipes
  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes); // `of()` makes it look like an API call
  }

  // ✅ Get one recipe by ID
  getRecipeById(id: number): Observable<Recipe | undefined> {
    const recipe = this.recipes.find(r => r.id === id);
    return of(recipe);
  }
}
