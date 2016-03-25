import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
  <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
    {{ currentMeal.name }}
  </h3>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  mealClicked(clickedMeal: Meal): void {
    console.log("child", clickedMeal);
  }
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
}

 @Component({
   selector: 'my-app',
   directives: [MealListComponent],
   template: `
  <div class="page-header">
    <h1>Meal Tracker</h1>
  </div>
  <div class="container">
    <h2>Entries:</h2>
    <meal-list [mealList]="meals"></meal-list>
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

 export class Meal {
   constructor(public name: string, public details: string, public calories: number, id: number){
   }
 }
