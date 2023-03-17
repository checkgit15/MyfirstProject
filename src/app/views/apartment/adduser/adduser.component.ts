import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import{ addDoc,Firestore,collection} from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tenantinfo } from '../user-details/information/tenantinfo';
//import { tenantinfo } from './inform

import { Subscription } from 'rxjs';

import { UserDetailService } from '../user-details/userdetailservice.service';
import { SharedDataService } from '../shared-data.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  providers:[UserDetailService,SharedDataService]
})
export class AdduserComponent implements OnInit,OnDestroy  {
  subscribe: Subscription = new Subscription;
  public userForm: FormGroup;
  userRef:any;
    users:tenantinfo[]=[];
   userObj:tenantinfo={
     id: '',
     userid: '',
     name: '',
     email: '',
     block: '',
    flat: '',
    role: '',
   // phonenumber:0,
    //rent_paid: 0,
    photourl:''
   };
     id:string='';
     userid:string='';
     name:string=''; 
     email:string='';
     block:string='';
     flat:string='';
     role:string='';
    // phonenumber:number=0;
  constructor(public router:Router,
    public _userService:UserDetailService,
    public fromBuilder:FormBuilder, 
               public actRouter:ActivatedRoute,
               private sharedData:SharedDataService) { 
                this.userForm=this.fromBuilder.group({
                  userid:[''],
                  name:[''],
                  email:[''],
                  block:[''],
                  flat:[''],
                  role:[''],
                  //phonenumber:['']

                })
               }
  ngOnInit():void{
    //To Show all user details
   this.getAlldetails();
   
    //UPDATE
    const id=this.actRouter.snapshot.paramMap.get('id');
    this._userService.getUserDoc(id).subscribe(res=>{
      this.userRef=res;
      this.userForm=this.fromBuilder.group({
        userid:this.userRef.userid,
        name:[this.userRef.name],
        email:[this.userRef.email],
        block:[this.userRef.block],
         flat:[this.userRef.flat],
        // flat:[''],
        role:[this.userRef.role],
        
      })
      
    })

    this.subscribe=this.sharedData.flat.subscribe(data=>{
      
       console.log(data);
    })
}
changeFlat(flat:any){

  console.log(flat.target.value);
this.sharedData.setFlat(flat.target.value);

    
   } 
    getAlldetails(){
     this._userService.getAlldetails().subscribe(res=>
      {
        this.users=res.map(e=>{
           return{
     id:e.payload.doc.id,
       ...e.payload.doc.data() as {}
     }as tenantinfo;
   })
   })
     }
    resetForm(){
      this.id= '',
      this.userid= '',
      this.name= '',
      this.email= '',
      this.block= '',
      this.flat= '',
      this.role= ''
     
    }

  addUsers()
  {
  
   if(this.userid==''||this.name==''||this.email==''||this.block==''||this.flat==''||this.role=='')
       {
         alert('Fill all input fields');
         return;
       }
    
     this.userObj.id='';
    this.userObj.userid=this.userid;
    this.userObj.name=this.name;
    this.userObj.email=this.email;
    this.userObj.block=this.block;
    this.userObj.flat=this.flat;
    this.userObj.role=this.role;
    
    this._userService.addUsers(this.userObj);
    this.resetForm();
    // this.sharedData.changeMessage(this.userForm.value.flat);
         this.router.navigate(['/apartment/user-details']);


     
 }


  onSubmit()
  {
    const id=this.actRouter.snapshot.paramMap.get('id');
    this._userService.updateUser(this.userForm.value,id);
    this.router.navigate(['/apartment/user-details']);
  };

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  
}





