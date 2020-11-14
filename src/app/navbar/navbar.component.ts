import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  logout()
  {
    var token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
  
      
    }
  }
  constructor(private _Router:Router) {

   
   }

  ngOnInit() {
  }

}
