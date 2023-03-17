import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

 
email:string='';
password:string='';
  constructor(public _service:AuthenticationService) { }
  ngOnInit():void{
    
  }

  register(){
if(this.email==''){
  alert('Please enter ur email');
  return;

}

 if(this.password==''){
alert('Please enter password');
   return;

}

this._service.register(this.email,this.password)
    this.email='';
this.password='';
    }
  }



  


