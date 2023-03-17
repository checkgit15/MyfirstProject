import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.scss']
})
export class VerifyotpComponent implements OnInit {
otp:any;
verify:any;
  
  constructor(private router:Router) { }

config={
  allowNumbersOnly:true,
  length:6,
  isPasswordInput:false,
  disableAutoFocus:false,
  placeholder:'',
  inputStyles:{
    width:'50px',
    height:'50px', 
  },

 };

  onInputChange(otpCode:any)
  {} 


  onOtpChange(otpCode:any)
  {
    this.otp=otpCode;
    console.log(this.otp);
  }

  handleClick()
  {
    var credentials=firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp)
  firebase.auth().signInWithCredential(credentials).then((response)=>
  console.log(response))
  this.router.navigate(['dashboard'])
  .catch((error)=>alert(error.message))
  }

  ngOnInit() {
    this.verify=JSON.parse(localStorage.getItem('verificationId')|| '{}')
  console.log(this.verify);
  }

}
