import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
  `
})

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
  <h3 *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal">
    {{ currentMeal.name }}
  </h3>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  constructor(){
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log("child", clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
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
    <meal-list [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)"></meal-list>
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
