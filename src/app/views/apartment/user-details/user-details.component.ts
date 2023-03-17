import { Component, OnInit, PipeTransform,Pipe, OnDestroy, } from '@angular/core';
import { UserDetailService} from './userdetailservice.service';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
 import { tenantinfo } from './information/tenantinfo';

import{Storage,ref,uploadBytesResumable,getDownloadURL,getStorage}from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { AngularFireStorage } from '@angular/fire/compat/storage';
import{SearchingPipe} from '../searching.pipe';
import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserDetailService,SearchingPipe,SharedDataService] 
})
export class UserDetailsComponent implements OnInit,OnDestroy {
 public newUrl='';
 subscribe: Subscription = new Subscription;
  users:tenantinfo[]=[];
 name:string='';
  images:any;
  userid:string='';
    public file:any={};
    storage=getStorage();
  
  photourl: string='' ;
  db: any;
  searchText='';
  isDesc: boolean = false;
  //search:string='';
  constructor(public _userService:UserDetailService,public af:AngularFireStorage,
    public afs:AngularFirestore,private sharedData:SharedDataService)
          {}
        
  // transform(value: any, ...args: any[]) {
  //   throw new Error('Method not implemented.');
  // }

      
 ngOnInit(): void {
            this.getAlldetails();
            // this.sharedData.currentMessage.subscribe((message)=>{
            //   this.flat=message;
            // })

            this.subscribe=this.sharedData.flat.subscribe(data=>{
             
               console.log(data);
            })
            
          }

          
   //To relate Flat Component
   changeFlat(flat:any){
 
    console.log(flat.target.value);
      this.sharedData.setFlat(flat.target.value);
     }

        
        

  deleteUser(users:tenantinfo)
   {
    var name = this.name as string;
 if(window.confirm('Are you sure you want to delete '+ name))
 {
  this._userService.deleteUser(users.id);
    
  }
   }
  
  getAlldetails()
  {
    this._userService.getAlldetails().subscribe(res=>
      {
       // console.log(res,"data from firebase")
        this.users=res.map(e=>{
          console.log(e.payload.doc.id)
          return{
           id:e.payload.doc.id,
           ...e.payload.doc.data() as {}
         }as tenantinfo;
 })
})
//console.log(this.users,"variable data")
  }

 
  upload($event:any){
        this.file=$event.target.files[0];
        }

 
 deleteImage(user:tenantinfo){
  
  // console.log(this.path)
  this.af.upload("/files"+Math.random()+this.file,this.file);
  const storageRef=ref(this.storage,`folder_name/${this.file.name}`) 
  const uploadTask=uploadBytesResumable(storageRef,this.file);
 uploadTask.on('state_changed',
  (snapshot)=>{
  const progress=(snapshot.totalBytes)
     console.log('deleted')
     
    },
  (error)=>{
     console.log(error.message);
   },
   ()=>{
     getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
          console.log('File available at',downloadURL)
            
 this.afs.collection("userinfo").doc(user.id).update({
  photourl:downloadURL
 })
   //this.db.doc(user.id).delete()
   //this.afs.collection("userinfo").doc(user.id).delete();
   this.af.storage.ref(downloadURL).delete();
   
//     {
//   photourl:downloadURL
//  })
 
}
     )
     
    })
  }
    

  uploadImage(user:tenantinfo){
  
    // console.log(this.path)
    this.af.upload("/files"+Math.random()+this.file,this.file);
    const storageRef=ref(this.storage,`folder_name/${this.file.name}`) 
    const uploadTask=uploadBytesResumable(storageRef,this.file);
   uploadTask.on('state_changed',
      (snapshot)=>{
        const progress=(snapshot.totalBytes)
        console.log('upload is done')
      },
      (error)=>{
       console.log(error.message);
     },
     ()=>{
       getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
            console.log('File available at',downloadURL)
  
    this.afs.collection("userinfo").doc(user.id).update({
    photourl:downloadURL
   })
     
  }
       )
        
      }
    )}
    

    //Sort reverse
    key:string=this.name;
    reverse:boolean=false;
   sort(key: any) 
   {
    this.key=key;
    this.reverse=!this.reverse;
   }

   ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}

//SORT ALPHABETICALLY

//     sort(property) 
//     {
// this.isDesc=!this.isDesc;
// let direction=this.isDesc ? 1: -1;
// this.users.sort(function(a,b){
//   if(a[property]<b[property]){
//     return -1 *direction;

//   }
//   else if(a[property]>b[property]){
//     return 1 * direction
//   }
//   else{return 0;}
// });




//   EditUser(user:tenantinfo){
 
//     if(window.confirm('Are you sure you want to update'))
//     this.route.navigate(['/adduser']);
 
// }
//}
// userNameList:any=[];
//      ngOnInit(): void {
//       this._userService.gettenantinfo().subscribe(response=>
//          {
//            console.log(response);
//            this.Tenantinfo=response
//            for(let user of  this.Tenantinfo ){
//             console.log(user)
//            }
//          });
//     let user= localStorage.getItem('userProfile');
//     console.log(user,"profile Data");
//    }

//    updateUser(data:any){
//     let profile =data;
//     console.log(profile);
//     localStorage.setItem('userProfile',JSON.stringify(profile) )
//    }




// ngOnInit(): void {
//   this._userService.gettenantinfo().subscribe(response=>
//     {
//       console.log(response);
//       this.Tenantinfo=response

//     });
// }

// updateUser(data:any){
//  let profile =data;
//  console.log(profile);
//  localStorage.setItem('userProfile',JSON.stringify(profile) )
// }

  // public showCloseIcon: boolean = true;
  // toDisplay1 = true;
  // toDisplay2 = false;
  // toDisplay3 = false;
  // toDisplay4 = false;
  // toDisplay5 = false;

  //  infoReceived1:string[]=[];
  // infoReceived2:string[]=[];
  //  infoReceived3:string[]=[];
  //  infoReceived4:string[]=[];
  //  infoReceived5:string[]=[];

  // public infoReceived1:any;
  // public infoReceived2:any;
  // public infoReceived3:any;
  // public infoReceived4:any;
  // public infoReceived5:any;
  
  // getInfoFromService1()
  // {

  //   this.infoReceived1=this._userService.getInfo1();
  //    this.toDisplay1 = !this.toDisplay1;
  // }
  // getInfoFromService2()
  // {
  //   this.infoReceived2=this._userService.getInfo2();
  //   this.toDisplay2 = !this.toDisplay2;
  // }
  //   getInfoFromService3()
  // {
  //   this.infoReceived3 =this._userService.getInfo3();
  //   this.toDisplay3 = !this.toDisplay3;
  // }
  // getInfoFromService4()
  // {
  //   this.infoReceived4 =this._userService.getInfo4();
  //   this.toDisplay4 = !this.toDisplay4;
  // }
  // getInfoFromService5()
  // {
  //   this.infoReceived5 =this._userService.getInfo5();
  //   this.toDisplay5 = !this.toDisplay5;
  // }
        