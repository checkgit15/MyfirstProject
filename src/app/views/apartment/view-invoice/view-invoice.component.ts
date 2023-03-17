import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ServiceforinvoiceService } from '../invoice-list/serviceforinvoice.service';

//import { invoice2022 } from '../user-details/information/invoice2022'
import { invoicedue } from '../user-details/information/invoicedue';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.scss'],providers:[ServiceforinvoiceService]
})
export class ViewInvoiceComponent implements OnInit {

  @Input() profile:any;
 
     items: any;
  id:any;
  
       
     constructor(
      public _details:ServiceforinvoiceService,
      public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
        
          this.actRouter.params.subscribe(params=> {
            console.log(params)
            this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
              this.items=i});
          });  
    }
   
     
      getViewInvoice(id:any) 
        {
          const value=this.actRouter.snapshot.paramMap.get('id');
          this._details.getViewInvoice(this._details.id).subscribe(val=>{(val)});
          
        }
  
     
      ngOnInit(): void {
        
          this._details.getViewInvoice(this._details.id);
          // this.postList(); 
    }
    
  }
  