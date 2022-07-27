import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges, OnDestroy {

  //Decorator tell MyRating property will come from father component features
  @Input() MyRating!:number;
  @Input() MyColor!:string;

  table!:any[];

  constructor() { 
    console.log("Eimai o costructor toy rating")
  }

  ngOnInit(): void {
    console.log("I am on Init toy rating");
  }

  ngOnChanges(changes: SimpleChanges): void {

    // ngFor inputs are only elements of collection
    this.table = new Array(Math.floor(this.MyRating));
    console.log("I am on chanager of rating");
  }

  ngOnDestroy(): void {
    console.log("I am on destroy you rating");
  }

}
