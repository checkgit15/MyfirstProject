import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { invoice2022 } from '../user-details/information/invoice2022';
import { ServiceforinvoiceService } from '../invoice-list/serviceforinvoice.service';
//import{PaginatePipe} from './paginate.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.scss'],
  providers:[ServiceforinvoiceService,NgxPaginationModule]
})
export class UpdateInvoiceComponent implements OnInit {
   @Input() profile:any;
p : number=1;
  //  public date = new Date(); 
    //users:
   items: any;
id:any;
totalLength:any;
page:any;
  date: string='';
  dueamount=1;

  
   constructor(
    public _details:ServiceforinvoiceService,
    public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
      
        this.actRouter.params.subscribe(params=> {
          console.log(params)
          this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
            this.items=i});
        });  
  }
 
   
    getInvoice(id:any) 
      {
        const value=this.actRouter.snapshot.paramMap.get('id');
        this._details.getInvoice(this._details.id).subscribe(val=>{(val)});
        
      }

   
    ngOnInit(): void {
      
        this._details.getInvoice(this._details.id);
        // this.postList(); 
  }
  
  key:string=this.date;
    reverse:boolean=false;
   sort(key: any) 
   {
    this.key=key;
    this.reverse=!this.reverse;
   }




// postList():void{
//   this._details.getAllPosts().subscribe((response)=>{
//     this.POSTS=response;


//   })
// }


// onTableDataChange(event:any)
// {
//   this.page=event;
//   this.postList();
// }

  
// onTableSizeChange(event:any):void
// {
// this.tableSize=event.target.value;
// this.page=1;
// this.postList();
// }
  }
  
  
  
