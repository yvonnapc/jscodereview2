import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { MealDetailsComponent } from './meal-details.component';
import { EditMealComponent } from './edit-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent, MealDetailsComponent, EditMealComponent],
  template: `
  <div *ngFor="#currentMeal of mealList">
    <meal-display (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal">
    </meal-details>
    <edit-meal [meal]="selectedMeal"></edit-meal>
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
