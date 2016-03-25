import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: , args) {


  }
}
