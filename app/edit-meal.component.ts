import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
  <h3>Edit Details: {{ meal.details }}</h3>
  <h3>Edit Calories: {{ meal.calories }}</h3>
  `
})

export class EditMealComponent {
  public meal: Meal;
}
