import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrendingMovies(pagenumber):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=f257dec54cf8a9034e73a5d757f896f2&page="+pagenumber);
  }
}
