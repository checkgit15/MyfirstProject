import { Component, OnDestroy, OnInit,Input } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { entireflats} from '../user-details/information/entireflats';
import { ServiceforflatsService } from './serviceforflats.service';
//import { SharedDataService } from '../shared-data.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../shared-data.service';


@Component({
  selector: 'app-flatlist',
  templateUrl: './flatlist.component.html',
  styleUrls: ['./flatlist.component.scss'],
  providers:  [ServiceforflatsService,SharedDataService] 
})

export class FlatlistComponent implements OnInit,OnDestroy {

  subscribe: Subscription = new Subscription;
   page:any;
   totalLength:any;
       flats:entireflats[]=[];
  flat:string='';
    constructor(private _flatService:ServiceforflatsService,private sharedData:SharedDataService) { }

    getAllFlatdetails()
    {
      this._flatService.getAllFlatdetails().subscribe(res=>
        {
         // console.log(res,"data from firebase")
          this.flats=res.map(e=>{
            console.log(e.payload.doc.id)
            return{
             id:e.payload.doc.id,
             ...e.payload.doc.data() as {}
           }as entireflats;
   })
  })
  
    }

            
  deleteFlat(flats:entireflats)
  {
   var flat = this.flat as string;
if(window.confirm('Are you sure you want to delete '+ flat))
{
 this._flatService.deleteFlat(flats.id);
   
 }
  }

  
  ngOnInit(): void {
    this.getAllFlatdetails()
    
    // this.sharedData.currentMessage.subscribe((message)=>{
    //   this.flat=message;
    // })
    this.subscribe=this.sharedData.flat.subscribe(data=>{
      // return data;
       console.log(data);
    })
  
  }
  
  //To relate User Component
  changeFlat(flat:any){
 
    console.log(flat.target.value);
      this.sharedData.setFlat(flat.target.value);
     }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}

// ngOnInit(): void {
  // }
  // constructor()
  // {
  //   var jsonData:any= require('./data/database.json')
  //   console.log(jsonData.entireflats);
  // }
  
  //  ngOnInit(): void {
 
  //        this._flatService.getentireflats().subscribe(response=>
  //         {
  //          //  console.log(response);
  //           this.entireFlats=response
  //            for(let user of  this.entireFlats ){
  //             console.log(user)
  //           }
  //         });
  //    let user= localStorage.getItem('userProfile');
  //    console.log(user,"profile Data");
  //   }

  //   updateFlats(data:any){
  //    let profile =data;
  //    console.log(profile);
  //    localStorage.setItem('userProfile',JSON.stringify(profile) )
  //   }
  // }

