import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h5>Add A Meal:</h5>
        <input class="textbox" placeholder="Name" #newName><br>
        <input class="textbox" placeholder="Details" #newDetails><br>
        <input class="textbox" placeholder="Calories" #newCalories><br>
      <br>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn btn-info">Add</button>
    </div>
  `
})

export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<any[]>;
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
