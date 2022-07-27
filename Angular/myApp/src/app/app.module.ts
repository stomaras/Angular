import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from 'src/components/student/student.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from '../components/student/trainer/trainer.component';
import { MovieComponent } from '../components/movie/movie.component';

import {FormsModule} from "@angular/forms";
import { AddDashBetweenPipe } from 'src/shared-pipes/add-dash-between.pipe';
import { ConvertMinutesHoursPipe } from 'src/shared-pipes/convert-minutes-hours.pipe';
import { RatingComponent } from '../shared-components/rating/rating.component';
import { ErrorComponent } from '../shared-components/rating/error/error.component';
import { HomeComponent } from '../components/home/home.component';
import { GithubComponent } from '../components/github/github.component';
import { NobelComponent } from '../components/nobel/nobel.component';
import { ProductComponent } from '../components/product/product.component';
import {HttpClientModule} from "@angular/common/http"


// inputs, checkboxes, radioBox, must declare on imports

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TrainerComponent,
    MovieComponent,
    AddDashBetweenPipe,
    ConvertMinutesHoursPipe,
    RatingComponent,
    ErrorComponent,
    HomeComponent,
    GithubComponent,
    NobelComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
