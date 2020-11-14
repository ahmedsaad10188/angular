import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }
register(registerdata):Observable<any>
{
   return this._HttpClient.post("https://routeegypt.herokuapp.com/signup",registerdata)
}
logIn(logIndata):Observable<any>
{
  return this._HttpClient.post("https://routeegypt.herokuapp.com/signip",logIndata)
}

}
