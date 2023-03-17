import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

// import{ yeartwentytwo} from './maintenance-list/yearinformation/yeartwentytwo';
//import { Dhivya, Vanitha, yeartwentytwo} from '../user-details/information/yeartwentytwo';
import { Observable } from 'rxjs';
import { tenantinfo } from '../user-details/information/tenantinfo';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceServiceService {

 // JsonDataApiService

  constructor(public http:HttpClient) { }
url:string='http://localhost:3000';

 //getyearinfo():Observable<any>{
  //return this.http.get<yeartwentytwo[]>(`${this.url}/yeartwentytwo`);
 }
// getOctInfo():Observable<any>{
//    return this.http.get<Dhivya[]>(`${this.url }/Dhivya`);
//  }
// getVanithaInfo():Observable<any>{
//   return this.http.get<Vanitha[]>(`${this.url}/Vanitha`);
// }

// getFlatInfo(){
//   return this.http.get<flatinfo[]>(this.url+"flatinfo");
// }

 