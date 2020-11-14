import { SinUpComponent } from './sin-up/sin-up.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinInComponent } from './sin-in/sin-in.component';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = 
[
  {path:'',redirectTo:'Movies',pathMatch:'full'},
  {path:'signUp',component:SinUpComponent},
  {path:'signIn',component:SinInComponent},
  {path:'Home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'About',component:AboutComponent,canActivate:[AuthGuardService]},
  {path:'Movies',component:MoviesComponent,canActivate:[AuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
