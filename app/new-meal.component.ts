import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
    <div class="meal-form">
      <h5>Add A Meal:</h5>
      <input placeholder="Name" #newName>
      <input placeholder="Details" #newDetails>
      <input placeholder="Calories" #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)"></button>
    </div>
  `
})

export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<String>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var newMeal = [userName.value, userDetails.value, parseInt(userCalories.value)];
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
