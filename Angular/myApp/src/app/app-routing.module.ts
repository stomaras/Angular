import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubComponent } from 'src/components/github/github.component';
import { HomeComponent } from 'src/components/home/home.component';
import { MovieComponent } from 'src/components/movie/movie.component';
import { NobelComponent } from 'src/components/nobel/nobel.component';
import { ProductComponent } from 'src/components/product/product.component';
import { StudentComponent } from 'src/components/student/student.component';
import { TrainerComponent } from 'src/components/student/trainer/trainer.component';
import { ErrorComponent } from 'src/shared-components/rating/error/error.component';

const routes: Routes = [
  {path:"Students",component:StudentComponent},
  {path:"Trainers",component:TrainerComponent},
  {path:"Movies",component:MovieComponent},
  {path:"Home",component:HomeComponent},
  {path:"Github",component:GithubComponent},
  {path:"Nobel",component:NobelComponent},
  {path:"Product",component:ProductComponent},

  // redirects
  {path:"",redirectTo:"/Movies",pathMatch:'full'},
  {path:"Mathites",redirectTo:"/Students",pathMatch:'full'},



  // if url does not exist
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
