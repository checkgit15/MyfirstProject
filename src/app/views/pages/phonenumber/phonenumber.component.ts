import { Component, OnInit } from '@angular/core';
import "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';
//import * as firebase from 'firebase/app';

var config=
{
  apiKey: "AIzaSyB-0sd3b1zo89Abh_Niti8V37BcHCJcDZc",
  authDomain: "aptmms-e6514.firebaseapp.com",
  databaseURL: "https://aptmms-e6514-default-rtdb.firebaseio.com",
  projectId: "aptmms-e6514",
  storageBucket: "aptmms-e6514.appspot.com",
  messagingSenderId: "551245114744",
  appId: "1:551245114744:web:75eb703dbad171a5f1ac8d"
}

@Component({
  selector: 'app-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.scss']
})
export class PhonenumberComponent implements OnInit {

  phoneNumber:any;
  reCaptchaVerifier:any;

  confirmationResult: any;



  constructor(private router:Router) { }

  ngOnInit() {
   firebase.initializeApp(config);
  }


  getOtp()
  {
 this.reCaptchaVerifier=new firebase.auth.RecaptchaVerifier
 ('sign-in-button',{size:'invisible'})


    firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reCaptchaVerifier).then((confirmationResult)=>{
      localStorage.setItem('verificationId',JSON.stringify
      (confirmationResult.verificationId))
      this.router.navigate(['verifyotp']);
      
      //console.log(confirmationResult);
      //localStorage.setItem('token','true');
      //this.router.navigate(['verifyotp']);
      //alert("Logged in Successfully")

 }).catch((err) =>{

 alert(err.message);
 setTimeout(()=>{
  window.location.reload();
 },5000);

 });
    }

  }
   





// sendOtp(){


//      firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reCaptchaVerifier).then((confirmationResult)=>{
// //       console.log(confirmationResult);
// this.confirmationResult=confirmationResult;
// this.otpSent=true;
//   }).catch((err) =>{

//   alert(err.message);
//   setTimeout(()=>{
//    window.location.reload();
//   },5000);


// })
// }

// signIn(){

//   this.confirmationResult.confirm(this.otp).then((user: any)=>{

//     console.log(user)
    
//     })
    
  
// }


  




