import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PaymentServicesService } from '../payments/payment-services.service';
import { pay2021 } from '../user-details/information/pay2021';

@Component({
  selector: 'app-paylist2021',
  templateUrl: './paylist2021.component.html',
  styleUrls: ['./paylist2021.component.scss'],
  providers:[ PaymentServicesService]
})
export class Paylist2021Component implements OnInit {

        
    @Input() profile:any;
    
    users:pay2021[]=[];
   items: any;
   
   constructor(
    public _details:PaymentServicesService,
    public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
      
        this.actRouter.params.subscribe(params=> {
          //console.log(params)
          this._details.getParticularInfo2021(params['id']).subscribe((i: any)=>{
            this.items=i});
        });
    
    }
    
    getPay2021(id:any) 
      {
        const value=this.actRouter.snapshot.paramMap.get('id');
        this._details.getPay2021(this._details.id).subscribe(val=>{(val)});
        
      }


      // getAlldetails2021()
      //   {
      //     this._details.getAlldetails2021().subscribe(res=>
      //       {
      //        // console.log(res,"data from firebase")
      //         this.users=res.map(e=>{
      //           //console.log(e.payload.doc.id)
      //           return{
      //            id:e.payload.doc.id,
      //            ...e.payload.doc.data() as {}
      //          }as pay2021;
  
      //  })
      
      //        })
    
      //   }
    
    ngOnInit(): void {
      
      this._details.getPay2021(this._details.id) 
  }
  
      
  }
  
  
  
