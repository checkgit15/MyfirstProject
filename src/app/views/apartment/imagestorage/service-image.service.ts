import { Injectable } from '@angular/core';
import { AngularFireStorage,AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireUploadTask } from '@angular/fire/compat/storage';
  providedIn: 'root'

export class ServiceImageService {
  url = '';
   constructor(private afStorage: AngularFireStorage) { }
  // private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
  //   const url = await snap.ref.getDownloadURL();
  //   this.url = url;  //store the URL
  //   console.log(this.url);
  // }
}
