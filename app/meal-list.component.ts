import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { MealDetailsComponent } from './meal-details.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { HealthyPipe } from './healthy.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealDisplayComponent, MealDetailsComponent, EditMealComponent, NewMealComponent],
  template: `
  <div *ngFor="#currentMeal of mealList">
    <meal-display (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal">
    </meal-details>
    <edit-meal *ngIf="currentMeal === selectedMeal" [meal]="selectedMeal"></edit-meal>
  </div>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
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
  createMeal(newMeal: any[]): void{
    this.mealList.push(
      new Meal(newMeal[0], newMeal[1], newMeal[2], this.mealList.length)
    );
  }
}
