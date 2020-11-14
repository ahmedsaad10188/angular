import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SinUpComponent } from './sin-up/sin-up.component';
import { SinInComponent } from './sin-in/sin-in.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    SinUpComponent,
    SinInComponent,
    HomeComponent,
    AboutComponent,
    SeemorePipe,
    SearchPipe,
 

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
