import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <h5>Edit Name:</h5>
  <input [(ngModel)]="meal.name"/>
  <h5>Edit Details:</h5>
  <input [(ngModel)]="meal.details"/>
  <h5>Edit Calories:</h5>
  <input [(ngModel)]="meal.calories"/>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
