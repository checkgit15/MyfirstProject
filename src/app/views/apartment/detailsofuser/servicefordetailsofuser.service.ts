import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { tenantinfo } from '../user-details/information/tenantinfo';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class ServicefordetailsofuserService {
  userid: string='';
  id:any='';
//   [x: string]: any;
//    constructor(public http:HttpClient) { } url:string='http://localhost:3000/tenantinfo';
//  gettenantinfo(){
//    return this.http.get<tenantinfo[]>(this.url);
//  }

constructor(private afs:AngularFirestore,
  //private firestore:Firestore
  ) {}

     getUserDetails(){
return this.afs.collection('/userinfo').snapshotChanges();
  }

  getParticularInfo(id:any) { 
    //return this.afs.collection('/userinfo');
    return this.afs.collection('/userinfo').doc(id).valueChanges();
}

getUser(id:any){
  // return this.afs.collection('/userinfo').doc().get(id);
  return this.afs.collection('/userinfo').doc(id).valueChanges();
}

// async singleData(collName:any,docName:any){
//   const docRef = doc(this.firestore, collName , docName);
//   const docSnap = await getDoc(docRef);
//   return docSnap.data();
}

// url:string='http://localhost:3000/tenantinfo';
// getone()
// {
//   return this.http.get(tenantinfo[](this.url)).map(database=>{
//     return database.json()
//   }
// }),


  




