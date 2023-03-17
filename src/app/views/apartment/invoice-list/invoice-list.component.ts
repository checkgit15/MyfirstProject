import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceforinvoiceService } from '../invoice-list/serviceforinvoice.service';

import { invoice2022 } from '../user-details/information/invoice2022'
@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
  providers:[ServiceforinvoiceService]
})
export class InvoiceListComponent implements OnInit {
users:invoice2022[]=[];
id:any;
name:string='';
  constructor(public _details:ServiceforinvoiceService,public actRouter:ActivatedRoute)
   { }



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
          }as invoice2022;

  })
  console.log(this.users);
  
 })
 //console.log(this.users,"variable data")
   }


  ngOnInit(): void {
    this.getAlldetails();
  }
  
}



//  showTable:boolean=true;
//   selectInvoice:any;

// invoice_list=[
//   { 
//     "owner_name":"Divya",
//     "houseNo":202,
//     "rent_Paid":true,
//     "rent_amount":20000,

//   },
//   { 
//     "owner_name":"vanitha",
//     "houseNo":203,
//     "rent_Paid":false,
//     "rent_amount":15000,

//   },
//   { 
//     "owner_name":"Rahul",
//     "houseNo":204,
//     "rent_Paid":true,
//     "rent_amount":35000,

//   },
//   { 
//     "owner_name":"Bharathi",
//     "houseNo":205,
//     "rent_Paid":true,
//     "rent_amount":20000,

//   },
//   { 
//     "owner_name":"Priya",
//     "houseNo":210,
//     "rent_Paid":false,
//     "rent_amount":17000,

//   }
// ]


// getDetails(i:number,name:any){
//   console.log(this.invoice_list[i]);
//   alert(name);
// }
// update_details(i:number){
//   this.showTable=false;
//   this.selectInvoice=this.invoice_list[i];
// }
