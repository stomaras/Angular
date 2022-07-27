import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { User } from './githubModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private URL: string = "https://api.github.com/users/"

  getUser(name:string) : Observable<User>{// Observable is like promise
    let url:string = this.URL + name;

    return this.MyHttpService.get<User>(url);//.pipe kanies mapping ta properties toy antikeimenoy poy soy erxonte me ta properties toy antikeimenoy poy exies
  }


  constructor(private MyHttpService:HttpClient) { }
}
