
import { Component, OnInit,Input } from '@angular/core';
  import { Observable } from 'rxjs';
  //import { Dhivya,  yeartwentytwo } from '../user-details/information/yeartwentytwo';
  import { tenantinfo } from '../user-details/information/tenantinfo';
   import { ActivatedRoute } from '@angular/router';
import { MaintenanceServiceService } from '../maintenance-list/maintenance-service.service';
//import { ServicefordetailsofuserService } from '../detailsofuser/servicefordetailsofuser.service';
import { UserDetailService } from '../user-details/userdetailservice.service';
@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.scss'],
  providers:[MaintenanceServiceService,UserDetailService]
})
export class MaintenanceDetailsComponent implements OnInit {
        
  //    @Input() profile:any;
  //    maintenanceDetails : any;
  //    Year2022:yeartwentytwo[]=[];
  //    Tenantinfo:tenantinfo[]=[];
  //   //  October: Oct[]=[];
  //     DHIVYA :Dhivya []=[];
  // VANITHA: any;
      constructor(private route:ActivatedRoute,
      public _maintenanceService:MaintenanceServiceService,private _userService:UserDetailService) { }
      //
     ngOnInit() {}

      
      //  let tempUser : any = localStorage.getItem('userProfile');
      //  this.maintenanceDetails = JSON.parse(tempUser);
     
      
    //  this._userService.gettenantinfo().subscribe(response=>
    //      {
    //        console.log(response);
    //        this.Tenantinfo=response
    //    });
      // this._maintenanceService.getyearinfo().subscribe(response=>
      //   {
      //     // console.log(response);
      //     this.Year2022=response
      // });
//12-10
      //   this._maintenanceService.getOctInfo().subscribe(response=>
      //     {
          
      //       this.DHIVYA=response
          
      //        let tempUser : any = localStorage.getItem('userProfile');
      // this.maintenanceDetails = JSON.parse(tempUser);
      //     });
       

        // this._maintenanceService.getVanithaInfo().subscribe(response=>
        //    {
            
        //      this.VANITHA=response
          
        //    });

        //    }
          
        // monthInfo(data:any){
        //    let profile =data;
         
        //    localStorage.setItem('userProfile',JSON.stringify(profile) )
        //  }
         
        }
  
  


  


