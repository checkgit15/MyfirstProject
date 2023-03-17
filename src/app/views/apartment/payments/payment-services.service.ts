import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { pay2021} from '../user-details/information/pay2021';
import {payinfo} from '../user-details/information/payinfo';

import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class PaymentServicesService {
  id(id: any) {
    throw new Error('Method not implemented.');
  }

// public payCollection:AngularFirestoreCollection<pay>;
 
// public payRent:Observable<pay[]>

//id:any='';
constructor(public afs:AngularFirestore) { }
  
  //This is constructor content
    // this.payCollection=afs.collection<pay>('pay');

    // this.payRent = this.payCollection.snapshotChanges().pipe(
    //   map(actions => {
    //     return actions.map(a => {
    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;
    //       return data ;
    //     });
    //   })
    // );

    

    getAlldetails(){
      return this.afs.collection('/payinfo')
       .snapshotChanges();
      // return this.afs.collection<payinfo>('/month')
      // .snapshotChanges();
      
         }

         getAlldetails2021(){
          return this.afs.collection('/pay2021')
           .snapshotChanges();
          
          
             }
         
 getParticularInfo(id:any)//for child
 { 
  //return this.afs.collection('/userinfo');
      return this.afs.collection('/payinfo').doc(id).valueChanges();
    }

            
 getParticularInfo2021(id:any)//for child
 { 
  //return this.afs.collection('/userinfo');
      return this.afs.collection('/pay2021').doc(id).valueChanges();
    }

    getPay(id:any)
    {
    // return this.afs.collection('/userinfo').doc().get(id);
    return this.afs.collection('/payinfo').doc(id).valueChanges();
    }

    getPay2021(id:any)
    {
    // return this.afs.collection('/userinfo').doc().get(id);
    return this.afs.collection('/pay2021').doc(id).valueChanges();
    }


    addPay(user:payinfo,id:any){
      return this.afs.collection('/payinfo').doc(id).update(
        {
          
          balance:user.month.user1.balance
        });
    
   
    }
  //  }
  //  getEveryUser2(id:any) {
  //   return this.payRent2;
  // }
  
}