import { Injectable } from '@angular/core';
import { movies } from "./hollywoodDatabase";
import { IMovie } from './hollywoodModels';


// Decorator Injectable i give object of this class the ability to go injectable with dependency injection in someone constructor
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getAll():IMovie[]{
    return movies;
  }







}
