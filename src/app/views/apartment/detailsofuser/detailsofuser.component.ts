import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import{ServicefordetailsofuserService} from './servicefordetailsofuser.service';
import { tenantinfo } from '../user-details/information/tenantinfo';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import * as firebase from 'firebase/compat';
//import { Firestore } from '@angular/fire/firestore';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-detailsofuser',
  templateUrl: './detailsofuser.component.html',
  styleUrls: ['./detailsofuser.component.scss'],
  providers:  [ServicefordetailsofuserService]
})
export class DetailsofuserComponent implements OnInit {
   @Input() profile:any;
     users:tenantinfo[]=[];
  items: any;
    constructor(
    public _details:ServicefordetailsofuserService,
    public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
      {
        this.actRouter.params.subscribe(params=> {
          console.log(params)
          this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
            this.items=i});
        });
       }
      }
      getUser(id:any) 
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this._details.getUser(this._details.id).subscribe(val=>{(val)});
      
    };

  ngOnInit(): void {
  //  this.getUser(this.items) ;
  //   {}
  this._details.getUser(this._details.id);
     
}

}
      // return this.afservice.collection('userinfo')
      //    .doc(id)
      //    .ref;

    //  var items= this._details.getParticularInfo('id').subscribe(res=>{
    //    }) ;
   

    

// function getUser(id: any) {
//    throw new Error('Function not implemented.');
// }



// this.getUserDetails()
// {}
      

    

      //this.userDetails = JSON.parse(temp);
        // this._completeinfo.gettenantinfo().subscribe(response=>
    //   {
    //     console.log(response);
    //     this.Tenantinfo=response
        

    //     for(let user of  this.Tenantinfo ){
    //      console.log(user)
    //     }
    //   });

  // ngOnInit(): void {
  // this.Name=this.route.snapshot.params['Name'];
  // this.getone();
  // } 

  // getone()
  // {
  //   this._completeinfo.getone().subscribe((response: any) =>
  //   {this.data=this.data;

  //   })
  // }

  



   


