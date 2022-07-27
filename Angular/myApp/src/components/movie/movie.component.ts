import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import {movies} from './hollywoodDatabase';
import {IMovie, SortOptions} from './hollywoodModels';
import { ITableSettings, TableSettings } from './tableSettings';
import {MoviesService} from './movies.service'



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

// let never inside classes
export class MovieComponent implements OnInit, OnDestroy, OnChanges {

  Movies!:Array<IMovie>; // Start of the game We get All Movies from database

  //Filtering
  
  searchTitle!:string;
  searchYear!:number;
  FilteredMovies!:Array<IMovie>;// begine of the game assume movies == filtered movies

  SortOptions:SortOptions = SortOptions.titleAsc;
  yearIsAsc:boolean = true;
  titleIsAsc:boolean = true;

  onTableHandler(){
    this.FilteredMovies = this.Movies;
   
    this.onFilterMovies();

    //Sorting
    this.onSortMovies();
    //DataTables Angular


  }

  private onSortMovies(){
    switch(this.SortOptions){
      case SortOptions.titleAsc: this.FilteredMovies = this.FilteredMovies.sort((a,b)=>a.title < b.title ? -1 : 1);break;
      case SortOptions.titleDesc:this.FilteredMovies = this.FilteredMovies.sort((a,b)=>a.title > b.title ? -1 : 1);break;
      case SortOptions.yearAsc:this.FilteredMovies = this.FilteredMovies.sort((a,b)=>a.productionDate.getFullYear() - b.productionDate.getFullYear());break;
      case SortOptions.yearDesc:this.FilteredMovies = this.FilteredMovies.sort((a,b)=>b.productionDate.getFullYear() - a.productionDate.getFullYear());break;
      default: this.FilteredMovies = this.FilteredMovies.sort((a,b)=>a.title > b.title ? -1 : 1);break;

    }
  }

  private onFilterMovies(){
    if(this.searchTitle){
      this.FilteredMovies = this.FilteredMovies.filter(x=>x.title.toUpperCase().includes(this.searchTitle.toUpperCase()))
    }
    if(this.searchYear){
      this.FilteredMovies = this.FilteredMovies.filter(x=>x.productionDate.getFullYear() > this.searchYear);
    }
  }
  ToggleSortTitle(){
    this.titleIsAsc = !this.titleIsAsc;
    this.SortOptions = this.titleIsAsc ? SortOptions.titleAsc : SortOptions.titleDesc;
    this.onTableHandler();
  }

  ToggleSortYear(){
    this.yearIsAsc = !this.yearIsAsc;
    this.SortOptions = this.yearIsAsc ? SortOptions.yearAsc : SortOptions.yearDesc;
    this.onTableHandler();
  }



  //CSS Attributes
  Settings:ITableSettings = TableSettings;
  ImageWidth = 60;
  BorderRadius = 30;

  PriceIsHidden:boolean = true;
  TogglePrice(){
    this.PriceIsHidden = !this.PriceIsHidden;
    console.log(this.PriceIsHidden);
  }

  InitiateMovieComponent(){
    this.Movies = this.repoService.getAll();
    this.FilteredMovies = this.Movies.sort((a,b)=>a.title < b.title ? -1 : 1);
  }



  //MovieRepo!:MoviesService;
  constructor(public repoService:MoviesService) { 
    console.log("I am movie constructor")
  }
  // Hook Methods
  // ngOnInit the time which come inside DOM
  // when component come in life then get the data in order to read
  ngOnInit(): void {
    this.InitiateMovieComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('I am onchanges toy movie');
  }

  ngOnDestroy(): void {
    console.log('I am ondestroy you movie');
  }
  // we get due to implements OnInit Interface
  //mount unmount the dom

}


