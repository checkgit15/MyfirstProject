import { Component, OnDestroy, OnInit } from '@angular/core';
import { entireflats } from '../user-details/information/entireflats';
  
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceforflatsService } from '../flatlist/serviceforflats.service';
import{SharedDataService} from '../shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addflat',
  templateUrl: './addflat.component.html',
  styleUrls: ['./addflat.component.scss'],
  providers:[ServiceforflatsService,SharedDataService]
})
export class AddflatComponent implements OnInit,OnDestroy {
  subscribe: Subscription = new Subscription;

  public flatForm: FormGroup;
  flatRef:any;
    flats:entireflats[]=[];
   flatObj:entireflats={
     id: '',
     name: '',
     block: '',
     flat: '',
     status: '',
     sqft: '',
     parkinglot: ''
   };
     id:string='';
     name:string=''; 
     flat:string=''; 
     block:string='';
     status:string='';
     sqft:string='';
     parkinglot:string='';
  constructor(public route:Router,
    public _flatService:ServiceforflatsService,
    public fromBuilder:FormBuilder, 
               public actRouter:ActivatedRoute,
               private sharedData:SharedDataService) { 
                this.flatForm=this.fromBuilder.group({
                  name:[''],
                  block:[''],
                  flat:[''],
                  status:[''],
                  sqft:[''],
                  parkinglot:['']
                })
               }
  ngOnInit():void{
    //To Show all user details
   this.getAllFlatdetails();
   
    //UPDATE
    const id=this.actRouter.snapshot.paramMap.get('id');
    this._flatService.getUserDoc(id).subscribe(res=>{
      this.flatRef=res;
      this.flatForm=this.fromBuilder.group({
        name:[this.flatRef.name],
        block:[this.flatRef.block],
        flat:[this.flatRef.flat],
        status:[this.flatRef.status],
        sqft:[this.flatRef.sqft],
        parkinglot:[this.flatRef.parkinglot]

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

   
    getAllFlatdetails(){
     this._flatService.getAllFlatdetails().subscribe(res=>
      {
        this.flats=res.map(e=>{
           return{
     id:e.payload.doc.id,
       ...e.payload.doc.data() as {}
     }as entireflats;
   })
   })
     }
    resetForm(){
      this.id= '',
      this.block= '',
      this.name= '',
      this.flat= '',
      this.status= '',
      this.sqft= '',
      this.parkinglot= ''
     
    }

  addFlat()
  {
    
   if(this.name==''||this.block==''||this.flat==''||this.status==''||this.sqft==''||this.parkinglot=='')
       {
         alert('Fill all input fields');
         return;
       }
    
     this.flatObj.id='';
    this.flatObj.name=this.name;
    this.flatObj.block=this.block;
    this.flatObj.flat=this.flat;
    this.flatObj.status=this.status;
    this.flatObj.sqft=this.sqft;
    this.flatObj.parkinglot=this.parkinglot;
    this._flatService.addFlat(this.flatObj);
    this.resetForm();
    // this.sharedData.changeMessage(this.flatForm.value.flat);
   
         this.route.navigate(['/apartment/flatlist']);
     
 }
  

  onSubmit()
  {
    const id=this.actRouter.snapshot.paramMap.get('id');
    this._flatService.updateFlat(this.flatForm.value,id);
    this.route.navigate(['/apartment/flatlist']);
  };
  
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}






