import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  //userData: Observable<firebase.User>;
  constructor(public fireauth:AngularFireAuth,private router:Router) {
//this.userData = AngularFireAuth.authState;
   }
//login with email method
  login(email:string,password:string){
   {
      this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
     localStorage.setItem('token','true');
           this.router.navigate(['dashboard']);
           alert("Logged in Successfully")

      }, err =>{

      alert(err.message);
      this.router.navigate(['login']);

      });
    }

      }
     
  

  //register method
  register(email:string,password:string){

    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
 alert("Registration Successful")
 this.router.navigate(['/login']);
}, err =>{
  alert(err.message);
  this.router.navigate(['/register']); 
}
)
  }

  
  //logout method
  logout()
  {


   
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
     
    
    // this.fireauth.signOut().then(()=>{
    //   localStorage.removeItem("token");
    //   this.router.navigate(['/login']);
    //  }, err =>{
    //    alert(err.message);
       
    //  }
    // );
  }


  //forgetpassword

  forgotpassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/verifyemail']);
    })
             }

//Login with google
googleSignIn()
             {
             
return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>{
  this.router.navigate(['/dashboard'])
  localStorage.setItem('token',JSON.stringify(res.user?.uid))
},err=>{
  alert(err.message);
}
)
   }


   
//login with username and password

  loginUser(user:string,password:string){
    if(user=='admin'&& password=='admin123'){
    
    
      localStorage.setItem('token','true');
      this.router.navigate(['charts']);
      alert("Logged in Successfully");
    
    }

  
    else if(user=='tennant' &&password=='tennant123'){
     
    localStorage.setItem('token','true');
          this.router.navigate(['charts']);
          alert("Logged in Successfully")

      }
    }

    
}

//login with username and password

  // login(email:string,password:string){
  //   if(email=='admin'&& password=='admin123'){
  //   this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
    
  //     localStorage.setItem('token','true');
  //     this.router.navigate(['charts']);
  //     alert("Logged in Successfully");
    
  //   })

  // }
  //   else if(email:string,password:string){
  //     this.fireauth.signInWithEmailAndPassword(email,password).then(()=> {
  //   localStorage.setItem('token','true');
  //         this.router.navigate(['dashboard']);
  //         alert("Logged in Successfully")

  //     }, err =>{

  //     alert(err.message);
  //     this.router.navigate(['login']);

  //     });
  //   }

  //     }