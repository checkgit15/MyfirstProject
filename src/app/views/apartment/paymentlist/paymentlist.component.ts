import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PaymentServicesService } from '../payments/payment-services.service';
import { payinfo } from '../user-details/information/payinfo';
@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.scss'],
  providers:[ PaymentServicesService]
})

export class PaymentlistComponent implements OnInit {
  @Input() profile:any;
  
  users:payinfo[]=[];
 items: any;
 
 constructor(
  public _details:PaymentServicesService,
  public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
    
      this.actRouter.params.subscribe(params=> {
        //console.log(params)
        this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
          this.items=i});
      });
  
  }
  
  getPay(id:any) 
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this._details.getPay(this._details.id).subscribe(val=>{(val)});
      
    }
  
  ngOnInit(): void {
    
    this._details.getPay(this._details.id) 
}

    
}


