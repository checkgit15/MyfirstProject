import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import{payment} from '../user-details/information/payment';
import{PaymentServicesService} from './payment-services.service';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import * as firebase from 'firebase/compat';
import{AngularFireFunctions} from '@angular/fire/compat/functions';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
//import { Stripe } from 'stripe';
declare var Stripe:any;

 @Component({
   selector: 'app-payments',
   templateUrl: './payments.component.html',
   styleUrls: ['./payments.component.scss'],
   providers:[PaymentServicesService]
 })
 export class PaymentsComponent implements OnInit {
//id:string='';
// path:String='';

payments:payment[]=[];
  stripeStatus:string;
  due:any;
  result='';
   activatedRoute: any;
      constructor(private _payService:PaymentServicesService,
              public af:AngularFireStorage,
              public firestore:AngularFirestore,
              public affun:AngularFireFunctions,
              public router:Router)
      {
      this.stripeStatus='';
      this.due=100;
      }
   
   
   ngOnInit(): void {
    //this.getAlldetails()
     this.due=this.firestore.collection('due',ref=>ref.where('name','!=',null)).valueChanges();
     this.stripeStatus=this.getStripeStatus();
   }
getStripeStatus():any{
let action=this.activatedRoute.snapshot.queryParamMap.get('action');
console.log("action=",action);
if(action&&action== 'cancel'||action=='success')
return action;
return '';

}

checkoutFirebase(paymentId:string):void{
  console.log("check wit id",+paymentId);
  var stripe=Stripe(environment.stripe.key);
  this.affun.httpsCallable("stripecheckout")({id:paymentId}).subscribe(result=>{
    console.log(result);
    stripe.redirectTocheckout({
      sessionId:result,
    }).then(function(result:any){
      console.log(result.error.message)
      
    })
    })
    
  }
 
  reloadHome()
  {
    this.router.navigate(['/apartment/payments']).then(()=>{
      window.location.reload();
    });
  }
}

  
//   getAlldetails()
//   {
//     this._payService.getAlldetails().subscribe(res=>
//       {
      
//         this.paymentdata=res.map(e=>{
//           console.log(e.payload.doc.id)
//           return{
//            id:e.payload.doc.id,
//            ...e.payload.doc.data() as {}
//          }as payment;
//  })
// })
//   }

//   upload($event:any){
//      //this.path=(<HTMLInputElement>$event.target).value
//     this.path=$event.target.files[0]
//     // this.ref=this.af.ref(this.id);
//     // this.downloadURL=this.path.downloadURL();
//   }
// uploadImage(){
//   console.log(this.path)
//   this.af.upload("/files"+Math.random()+this.path,this.path);
 
// }



 


//  downloadImage(storagePath:string):Promise<string>{
//   return this.af.ref(storagePath).downloadImage().toPromise();
//  }

// async downloadfile(url:string,savedFileName:string)
// {
// const blob =await this.downloadBlobFromUrl(url);
// SVGAnimatedPreserveAspectRatio(blob,savedFileName);
// }


//    @Input() Name:any;
//    @ViewChild(PaymentDetailsComponent) view !: PaymentDetailsComponent
//    inputname= "";
//   passValue(name1:any) {
//      //const{value} = name1;
//       this.inputname=name1;
//    };
// userName:string='';
// user:string='';
// userList: string[]=[];
// onaddUser()
// {
//    this.userList.push(this.user);
// }
   
//   public name=[
   //   this.paymentService.getInfo1(),this.paymentService.getInfo2(),this.paymentService.getInfo3()];
// public name=[
//    this.paymentService.info[0].Name,this.paymentService.info[1].Name,this.paymentService.info[2].Name];


   
   //  public flat=[
   // this.paymentService.info[0].Email_Id,this.paymentService.info[1].Email_Id,this.paymentService.info[2].Email_Id];
   
// constructor(private paymentService:UserDetailService)
//    {}
// Tenantinfo:tenantinfo[]=[];
// userNameList:any=[];
// constructor(private _userService:UserDetailService){}


  
//    ngOnInit(): void {
//    //    this._userService.gettenantinfo().subscribe(response=>
//    //       {
//    //         console.log(response);
//    //         this.Tenantinfo=response
//    //         for(let user of  this.Tenantinfo ){
//    //          console.log(user)
//    //         }
//    //       });
//    //  let user= localStorage.getItem('userProfile');
//    //  console.log(user,"profile Data")

//    // }

//  }
//  }