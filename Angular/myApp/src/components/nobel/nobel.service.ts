import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nobel } from './nobelModels';

@Injectable({
  providedIn: 'root'
})
export class NobelService {

  private URL = "https://api.nobelprize.org/v1/prize.json?";

  getNobel(): Observable<Nobel>{
    return this.HttpService.get<Nobel>(this.URL);
  }


  // use this singleton service
  constructor(private HttpService:HttpClient) { }
}
