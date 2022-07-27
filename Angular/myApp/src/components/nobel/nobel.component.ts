import { Component, OnInit } from '@angular/core';
import { NobelService } from './nobel.service';
import { Nobel, Prize } from './nobelModels';



@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrls: ['./nobel.component.css']
})
export class NobelComponent implements OnInit {

  Prizes!:Array<Prize>
  DistinctCategory!:Array<string>;
  

  constructor(private NobelPrize:NobelService) {

   }

  ngOnInit(): void {
    this.NobelPrize.getNobel().subscribe(
      {
        next: response => {
          this.Prizes = response.prizes
          this.DistinctCategory = [...new Set(this.Prizes.map(x=>x.category))];
          console.log(this.DistinctCategory);
        },
        error: e => console.log(e),
        complete: ()=> console.log("Success")
      }
    )
  }

}
