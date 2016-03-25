import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Meal[] , args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy"){
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredHealthyState === "notHealthy"){
      return input.filter((meal) => {
        return meal.calories >= 301;
      });
    } else {
      return input;
    }
  }
}
