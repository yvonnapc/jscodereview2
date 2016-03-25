import { Component } from 'angular2/core';

 @Component({
   selector: 'my-app',
   template: `
  <div class="page-header">
    <h1>Meal Tracker</h1>
  </div>
  <div class="container">
    <h2 *ngFor="#meal of meals">{{ meal.name }}</h2>
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
 }

 export class Meal {
   constructor(public name: string, public details: string, public calories: number, id: number){
   }
 }
