import { Component, OnInit,Input } from '@angular/core';
import { PaymentServicesService } from '../payments/payment-services.service';
import{payment} from '../user-details/information/payment';


import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.scss']
})
export class ImageviewComponent implements OnInit {

  
   @Input() profile:any;
     users:payment[]=[];
  items: any;
    constructor(
    public _details:PaymentServicesService,
    public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
      
      //   this.actRouter.params.subscribe(params=> {
      //     console.log(params)
      //     this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
      //       this.items=i});
      //   });
      //  }
      }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
//       getPayment(id:any) 
//     {
//       const value=this.actRouter.snapshot.paramMap.get('id');
//       this._details.getPayment(this._details.id).subscribe(val=>{(val)});
      
//     };

//   ngOnInit(): void {
//   //  this.getUser(this.items) ;
//   //   {}
//   this._details.getPayment(this._details.id);
     
// }

}