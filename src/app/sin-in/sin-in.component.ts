import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sin-in',
  templateUrl: './sin-in.component.html',
  styleUrls: ['./sin-in.component.css']
})
export class SinInComponent implements OnInit {

  sinInForm=new FormGroup
  ({

    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(6)])
  });
  logIn(logIndata)
  {
   this._AuthService.register(this.sinInForm.value).subscribe((data)=>{
    localStorage.setItem('token',data.token);

     console.log(data);

      this._Router.navigateByUrl("/Movies");
   },(err)=>{
     console.log(err)
   })

  }

  constructor(private _AuthService:AuthService, private _Router:Router) {


   }

  ngOnInit() {
  }

}
