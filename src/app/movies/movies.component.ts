import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  pagenumbers:number[]=[];
   currentpage=1;
   searchtext:string;
  movies:any[]=[];
  imgUrl:string="https://image.tmdb.org/t/p/original";
  constructor(private _MoviesService:MoviesService) 
  { 
    for(let i=1;i<11;i++)
    {
      this.pagenumbers.push(i);
    }
    this._MoviesService.getTrendingMovies(1).subscribe((data)=>{
      this.movies=data.results;
    })

   


  }
  changenumber(ind)
  {
    this.currentpage=ind;
    this._MoviesService.getTrendingMovies(this.currentpage).subscribe((data)=>{
      this.movies=data.results;
    })
  }
prev()
{
  this.changenumber(this.currentpage -1)
}
next()
{
  this.changenumber(this.currentpage +1)
}
 

  ngOnInit() {
  }

}
