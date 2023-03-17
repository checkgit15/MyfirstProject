import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

import { PaymentServicesService } from '../payments/payment-services.service';
import { payment } from '../user-details/information/payment';
import {Observable} from 'rxjs';
import { payinfo } from '../user-details/information/payinfo';
import { User } from '@angular/fire/auth';

//import 'rxjs/add/operator/map';
@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
  providers:[ PaymentServicesService]
})

 
export class PaymentDetailsComponent implements OnInit {
  // @Input() profile:any;
  
  id:any;
  users: payinfo[]=[];
  items: any;



  constructor(public actRouter:ActivatedRoute,
    public _details:PaymentServicesService) {
    //this.doc$ = db.collection(this.collection).doc(this.docId).valueChanges();
    

      }


      getAlldetails()
      {
        this._details.getAlldetails().subscribe(res=>
          {
           // console.log(res,"data from firebase")
            this.users=res.map(e=>{
              //console.log(e.payload.doc.id)
              return{
               id:e.payload.doc.id,
               ...e.payload.doc.data() as {}
             }as payinfo;

     })
     console.log(this.users);
     
    })
    //console.log(this.users,"variable data")
      }

      
  // getPay(id:any) 
  // {
  //   const value=this.actRouter.snapshot.paramMap.get('id');
  //   this._details.getPay(this._details.id).subscribe(val=>{(val)});
    
  // }

              
       ngOnInit(){
        
        this.getAlldetails();
       // this._details.getPay(this._details.id)
    //  this._details.getEveryUser(this.id).subscribe(payee=>{
    //    this.users=payee} );
      }

     
      

    }
     
    
  

      
    
    
    
      // getPayment(id:any) 
      // {
      //   const value=this.actRouter.snapshot.paramMap.get('ReHWWX5TMFY39TWkTaBO');
      //   this._details.getPayment(this._details.id).subscribe(val=>{(val)});
        
      // }



  










