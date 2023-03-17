import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/service/authentication.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

 
  email:string='';
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void{

}
sendlink(){
this.auth.forgotpassword(this.email);
this.email='';
}
}

