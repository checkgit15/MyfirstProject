
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { tenantinfo } from './information/tenantinfo';
// import{ yeartwentytwo} from './maintenance-list/yearinformation/yeartwentytwo';
// import { yeartwentytwo} from './information/yeartwentytwo';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getDownloadURL } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})

// JsonDataApiService
export class UserDetailService {

  id:string='';
  name:string='';
  email:string='';
  constructor(public afs:AngularFirestore,
    public af:AngularFireStorage,
    public http:HttpClient) { }
    db=this.afs.collection('/userinfo');
    
    getAlldetails(){
return this.afs.collection('/userinfo').snapshotChanges();
  }

  // gettenantinfo(){
  //     return this.http.get<tenantinfo[]>('/userinfo');
  //   }

    addUsers(user:tenantinfo)
{
  user.id=this.afs.createId();
  return this.afs.collection('/userinfo').doc(user.id).set(user);
 // return this.afs.collection('/userinfo').add(user);
}

deleteUser(id:any) { 
  
  return this.db.doc(id).delete();
 }
getUserDoc(id:any)
    {
     return this.afs.collection('/userinfo')
     .doc(id)
     .valueChanges()
    }

updateUser(user:tenantinfo,id:any){
  return this.db.doc(id).update(
    {userid:user.userid,
      name:user.name,
      email:user.email,
      block:user.block,
      flat:user.flat,
      role:user.role
    });
}

}

// addToFirebase(user:tenantinfo)
// {
//   this.afs.collection('/userinfo').doc(user.id).set(
//     {photourl:getDownloadURL
      
//     });
//   //user.photourl=this.afs.createId();
//   // return this.afs.collection('/userinfo').doc(user.photourl).set(user);
//  // return this.afs.collection('/userinfo').add(user);
// }

// updateFirebase(user:tenantinfo,id:any)
// {
//    this.af.collection('/userinfo').update(
//     {photourl:user.photourl,
      
//     });

// }

  
//   constructor(public http:HttpClient) { }
// url:string='http://localhost:3000/';

// gettenantinfo(){
//   return this.http.get<tenantinfo[]>(this.url+"tenantinfo");
// }

// getyearinfo(){
//   return this.http.get<yeartwentytwo[]>(this.url+"yeartwentytwo");
// }

// getFlatInfo(){
//   return this.http.get<flatinfo[]>(this.url+"flatinfo");
// }

	
  

