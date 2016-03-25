import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
    <h5>Details: {{ meal.details }}</h5>
    <h5>Calories: {{ meal.calories }}</h5>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}
