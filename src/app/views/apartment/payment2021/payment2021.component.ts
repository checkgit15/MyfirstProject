import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { ActivatedRoute } from '@angular/router';
  
  import { PaymentServicesService } from '../payments/payment-services.service';
  import { payment } from '../user-details/information/payment';
  import {Observable} from 'rxjs';
  import { pay2021 } from '../user-details/information/pay2021';
  import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-payment2021',
  templateUrl: './payment2021.component.html',
  styleUrls: ['./payment2021.component.scss'],
  providers:[ PaymentServicesService]
})
export class Payment2021Component implements OnInit {
     monthname:string ='';
    id:any;
    users: pay2021[]=[];
   // items: any;
  
  
  
    constructor(public actRouter:ActivatedRoute,
      public _details:PaymentServicesService) {
           
          }
  
  
        getAlldetails2021()
        {
          this._details.getAlldetails2021().subscribe(res=>
            {
             // console.log(res,"data from firebase")
              this.users=res.map(e=>{
                //console.log(e.payload.doc.id)
                return{
                 id:e.payload.doc.id,
                 ...e.payload.doc.data() as {}
               }as pay2021;
  
       })
      
             })
    
        }
                  
         ngOnInit(){
          
          this.getAlldetails2021();
         
        }
  
       
          
      }
       
      
    
  
        
      
      
  
  
  
    
  
  
  
  
  
  
  
  
  
  
  


