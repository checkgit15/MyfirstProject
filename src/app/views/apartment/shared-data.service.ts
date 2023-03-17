import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { entireflats } from './user-details/information/entireflats';
import { AngularFirestore} from '@angular/fire/compat/firestore';

//import { AngularFireStorage } from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public flat=new BehaviorSubject<any>(1);
  constructor() { }
  setFlat(flat:any){
    this.flat.next(flat);
  }
}
// flat=new Subject();
//   constructor(public afs:AngularFirestore) { }

//   public entireflats: any = [];
// public subject = new Subject<any>();
// private messageSource = new  BehaviorSubject(this.entireflats);
// currentMessage = this.messageSource.asObservable();

// changeMessage(message: string) {
// this.messageSource.next(message);

// }



