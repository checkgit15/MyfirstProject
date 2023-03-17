import { Component, OnInit } from '@angular/core';
// import { tenantinfo } from './information/tenantinfo';
// import { tenantinfo } from '../user-details/information/tenantinfo';
import {MaintenanceServiceService} from './maintenance-service.service';
 //import{yeartwentytwo} from './maintenance/yearinformation/yeartwentytwo';
//import { Dhivya, yeartwentytwo } from '../user-details/information/yeartwentytwo';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  providers: [MaintenanceServiceService] 
})
export class MaintenanceComponent implements OnInit {
   // Year2022:yeartwentytwo[]=[];
  // October: any;
  // DHIVYA:Dhivya[]=[];
 
   
  constructor(private _maintenanceService:MaintenanceServiceService) { }

  ngOnInit(): void {

    // this._maintenanceService.getyearinfo().subscribe(response=>
    //   {
        
    //     this.Year2022=response
        // for(let user of  this.Year2022 ){
        //  console.log(user)
        // }
  }

      // this._maintenanceService.getOctInfo().subscribe(response=>
      //   {
          
      //     this.DHIVYA=response
      //     for(let user of  this.DHIVYA ){
      //      console.log(user)
      //     }
      //   });
      

  //     let user= localStorage.getItem('userProfile');
  //     console.log(user,"profile Data");
  // }

  // monthInfo(data:any){
  //   let profile =data;
  //   console.log(profile);
  //   localStorage.setItem('userProfile',JSON.stringify(profile) )
  //  }

}
