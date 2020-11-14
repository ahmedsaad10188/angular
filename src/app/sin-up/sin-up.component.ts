import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sin-up',
  templateUrl: './sin-up.component.html',
  styleUrls: ['./sin-up.component.css']
})
export class SinUpComponent implements OnInit {

  sinUPForm=new FormGroup
  ({
    'firstname':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    'lastname':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    'age':new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(6)])
  });
  signup(registerdata)
  {
   this._AuthService.register(this.sinUPForm.value).subscribe((data)=>{
      this._Router.navigateByUrl("/signIn");
   })

  }

  constructor(private _AuthService:AuthService, private _Router:Router) { }

  ngOnInit() {
  }

}
