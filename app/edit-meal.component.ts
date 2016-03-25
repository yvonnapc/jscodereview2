import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <h3>Edit Details:</h3>
  <input [(ngModel)]="meal.details"/>
  <h3>Edit Calories:</h3>
  <input [(ngModel)]="meal.calories"/>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
