import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <h4>{{ meal.details }}</h4>
    <h4>{{ meal.calories }}</h4>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>{{ meal.name }}</h3>
  `
})

export class MealDisplayComponent {
  public meal: Meal;
}

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, MealDetailsComponent],
  template: `
  <div *ngFor="#currentMeal of mealList">
    <meal-display (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal">
    </meal-details>
  </div>
  `
})

export class MealListComponent{
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
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
