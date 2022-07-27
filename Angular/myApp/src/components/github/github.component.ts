import { Component, OnInit } from '@angular/core';
import {User} from './githubModels';
import { GithubService } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  User!:User | undefined;
  SearchName!:string;
  ErrorMessage!:string | undefined;
  ShowLoadingSpinner:boolean = false;


  onGetUserHandler(){
    this.User = undefined;
    this.ErrorMessage = undefined;
    this.ShowLoadingSpinner = true;
    this.githubService.getUser(this.SearchName).subscribe(
      {
        next: response => this.User = response,
        error: error => {this.ErrorMessage = "Something went wrong : " + error.status; this.ShowLoadingSpinner = false;},//fat arrow syntax
        complete: () => this.ShowLoadingSpinner = false
      }
    );
  }


  ngOnInit(): void {
    //register in service which observe data in order to inform if data come or not 
    
  }

}
