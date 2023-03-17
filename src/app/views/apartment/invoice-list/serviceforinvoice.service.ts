import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

import { invoicedue } from '../user-details/information/invoicedue';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { userInfo } from 'os';
import { invoice2022 } from '../user-details/information/invoice2022';
import { DatePipe } from '@angular/common';
//const endpoint='https://console.firebase.google.com/u/0/project/aptmms-e6514/firestore/data/~2Finvoiceinfo';
@Injectable({
  providedIn: 'root'
})
export class ServiceforinvoiceService {
  invoice: invoice2022[]=[];
  invoicetopay: invoicedue[]=[];
  id(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public afs:AngularFirestore,private http:HttpClient) { }


  

  getAlldetails(){
    return this.afs.collection('/invoiceinfo')
     .snapshotChanges();
   
       }

       
getParticularInfo(id:any)//for child
{ 

  return this.afs.collection('/invoiceinfo').doc(id).valueChanges(); 
    // return this.afs.collection('/invoiceinfo').doc(id).valueChanges().pipe
    // (map(invoice2021=>this.sort(['date'])));
  }

  //update-invoice component
  getInvoice(id:any)
  {
  
  return this.afs.collection('/invoiceinfo').doc(id).valueChanges();
  }

  key:string='this.invoice.date';
  reverse:boolean=false;
 sort(key: any) 
 {
  this.key=key;
  this.reverse=!this.reverse;
 }


 getAlldetailsForInvoice()
 { return this.afs.collection('/invoicetobepaid')
 .snapshotChanges();}
  

 getParticularInfoView(id:any)//for child
 { 
 
   return this.afs.collection('/invoicetobepaid').doc(id).valueChanges(); 

}

//view-invoice component

getViewInvoice(id:any)
{

return this.afs.collection('/invoiceinfo').doc(id).valueChanges();
}

}

