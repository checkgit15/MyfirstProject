//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Signin } from './logininterface/signin';
import { AuthenticationService } from './service/authentication.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService] 
})
export class LoginComponent implements OnInit  {
  
  //user:Signin[]=[]
email: string='';
password:string='';
user:string='';
  //state: any;
  constructor(public _service:AuthenticationService,public router:Router) { }
  ngOnInit():void{
    //this.login();
  }

login(){
//   if(this.name ==''){
//    alert('Please enter username');
//     return;
//  }

//   if(this.password==''){
//  alert('Please enter password');
//  return;

//   }

 this._service.login(this.email,this.password)
 
  //this.router.navigate(['pages/dashboard']);return;
    this.email='';
    this.password='';
     }


     loginUser(){
      this._service.loginUser(this.user,this.password)
 
      //this.router.navigate(['pages/dashboard']);return;
        this.user='';
        this.password='';

     }

     signInWithGoogle()
     {

      this._service.googleSignIn();
     }
  }


