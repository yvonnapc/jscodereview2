import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
      <h5>Details: {{ meal.details }}</h5>
      <h5>Calories: {{ meal.calories }}</h5>
      </div>
    </div>
  </div>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}
