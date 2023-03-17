import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


import { AngularFirestore } from '@angular/fire/compat/firestore';
import { entireflats} from '../user-details/information/entireflats';

@Injectable({
  providedIn: 'root'
})
export class ServiceforflatsService {
  id:string='';
  flat:string='';
  block:string='';
  db=this.afs.collection('/flatinfo');
  constructor(public afs:AngularFirestore,public http:HttpClient)
  {}
  
  getAllFlatdetails()//for parent
  {
    return this.afs.collection('/flatinfo').snapshotChanges();
  }
      
      
      getFlat(id:any)
      {
      // return this.afs.collection('/userinfo').doc().get(id);
      return this.afs.collection('/flatinfo').doc(id).valueChanges();
      }

      addFlat(flats:entireflats)
      {
        flats.id=this.afs.createId();
        return this.afs.collection('/flatinfo').doc(flats.id).set(flats);
       // return this.afs.collection('/userinfo').add(user);
      }
      

      deleteFlat(id:any) { 
        
        return this.db.doc(id).delete();
       }
      getFlatDoc(id:any)
          {
           return this.afs.collection('/flatinfo')
           .doc(id)
           .valueChanges()
          }
      
      updateFlat(flat:entireflats,id:any){
        return this.db.doc(id).update(
          {userid:flat.block,
            name:flat.name,
            flat:flat.flat,
            status:flat.status,
            sqft:flat.sqft,
            parkinglot:flat.parkinglot,
           
          });
      }

 getParticularInfo(id:any)//for child
    { 
     //return this.afs.collection('/userinfo');
         return this.afs.collection('/flatinfo').doc(id).valueChanges();
       }
       getUserDoc(id:any)
       {
        return this.afs.collection('/flatinfo')
        .doc(id)
        .valueChanges()
       }



  }
   



// updateFlat(user:entireflats,id:any){
//   return this.db.doc(id).update(
//     {userid:user.block,
//       name:user.name,
//       email:user.flat
//     });
// }
 




//  constructor(public http:HttpClient) { } 
//   url:string='http://localhost:3000/entireflats';
//   getentireflats(){
//     return this.http.get<Flats1[]>(this.url);
//  }
