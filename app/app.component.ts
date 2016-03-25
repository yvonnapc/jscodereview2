import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

 @Component({
   selector: 'my-app',
   directives: [MealListComponent],
   template: `
  <div class="page-header">
    <h1>Meal Tracker</h1>
  </div>
  <div class="container">
    <div class="row">
      <h2>Entries:</h2>
      <meal-list [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)"></meal-list>
    </div>
  </div>
  <div class="page-footer">
    <p>Copyright (c) 2016 | Yvonna Contreras | Epicodus | Portland, OR</p>
  </div>
   `
 })

 export class AppComponent {
   public meals: Meal[];
   constructor(){
     this.meals = [
       new Meal("Breakfast", "Bagel and coffee", 200, 0),
       new Meal("Lunch", "Salad", 100, 1),
       new Meal("Dinner", "Dumplings", 300, 2),
     ];
   }
   mealWasSelected(clickedMeal: Meal): void{
     console.log("parent", clickedMeal);
   }
 }
