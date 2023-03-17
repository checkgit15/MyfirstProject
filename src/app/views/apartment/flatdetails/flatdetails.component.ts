import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { ServiceforflatsService } from '../flatlist/serviceforflats.service';
import { entireflats } from '../user-details/information/entireflats';
//import { tenantinfo } from '../user-details/information/tenantinfo';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-flatdetails',
  templateUrl: './flatdetails.component.html',
  styleUrls: ['./flatdetails.component.scss'],
  providers:[ServiceforflatsService]
})
export class FlatdetailsComponent implements OnInit {
  @Input() profile:any;
  
  users:entireflats[]=[];
 items: any;
 
 constructor(
  public _details:ServiceforflatsService,
  public afservice:AngularFirestore,public actRouter:ActivatedRoute) { 
    {
      this.actRouter.params.subscribe(params=> {
        console.log(params)
        this._details.getParticularInfo(params['id']).subscribe((i: any)=>{
          this.items=i});
      });
  }
  }
  getFlat(id:any) 
    {
      const value=this.actRouter.snapshot.paramMap.get('id');
      this._details.getFlat(this._details.id).subscribe(val=>{(val)});
      
    }
  
  ngOnInit(): void {
    
    this._details.getFlat(this._details.id) 
}

}
