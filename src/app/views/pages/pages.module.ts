import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthenticationService } from './login/service/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { PhonenumberComponent } from './phonenumber/phonenumber.component';
import * as firebase from 'firebase/compat';
import { VerifyotpComponent } from './verifyotp/verifyotp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
//import { AuthenticationService } from './service/authentication.service';

//import{AuthenticationService} from './login/login.component/service/AuthenticationService.service'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ForgetpasswordComponent,
    PhonenumberComponent,
    VerifyotpComponent,
    ForgetpwdComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormsModule,
    FormModule,
    ReactiveFormsModule,provideStorage(()=>getStorage()),HttpClientModule,
    
  // Initialize Firebase
  
  NgOtpInputModule,
    
  

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
providers:  [AuthenticationService] 
 
})
export class PagesModule {
}
