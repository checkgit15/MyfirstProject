
import { Component,  OnInit } from '@angular/core';

  import { AngularFirestore } from '@angular/fire/compat/firestore';
  import { AngularFireStorage} from '@angular/fire/compat/storage';
  import { finalize, Observable } from 'rxjs';
  import{payment} from '../user-details/information/payment';
 
 
import { PaymentServicesService } from '../payments/payment-services.service';
import { initializeApp } from '@firebase/app';
import{Storage,ref,uploadBytesResumable,getDownloadURL, getStorage}from '@angular/fire/storage';
@Component({
  selector: 'app-imagestorage',
  templateUrl: './imagestorage.component.html',
  styleUrls: ['./imagestorage.component.scss']
})

export class ImagestorageComponent implements OnInit {
  id:string='';
path:String='';
  images:any;
url = ''; 
// public img:any;
      paymentdata:payment[]=[];
       downloadURL: any;
     
  //  storage=getStorage();
  uploadedImage: any;
  selectedImage: any;

      constructor(private _payService:PaymentServicesService,       private storage: AngularFireStorage,       )
  {
      // af.ref("/files").getDownloadURL().subscribe((downloadURL)=>{
      //     this.images=downloadURL;
      //    });
   }
 
//    downloadImage(){
// getDownloadURL(ref(this.storage,'https://firebasestorage.googleapis.com/v0/b/aptmms-e6514.appspot.com/o/files0.02797276454936437%5Bobject%20File%5D?alt=media&token=c69379b2-312d-49c2-943f-2e32015c39ba'))
// .then((url)=>{
//   console.log(url)
  
//  })

// }

    upload($event:any){
        //this.path=(<HTMLInputElement>$event.target).value
        this.path=$event.target.files[0]
        // this.ref=this.af.ref(this.id);
        //this.downloadURL=this.path.downloadURL();
     }

     // referd from 
      public file:any;
     uploadImage(){
      
      var filePath = `${this.id}/${this.selectedImage.name}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url: any) => {
            this.uploadedImage = url;
          })
        })
      ).subscribe();
    }


      //console.log(this.path)
      //this.af.upload("/files"+Math.random()+this.path,this.path);
      // const storageRef=ref(this.storage,`folder_name/${this.file.name}`) 
      //   const uploadTask=uploadBytesResumable(storageRef,this.file);
      //  uploadTask.on('state_changed',
      //     (snapshot)=>{
      //       const progress=(snapshot.totalBytes)
      //       console.log('upload is'+progress+'%done')
      //     },
      //     (error)=>{
      //      console.log(error.message);
      //    },
      //    ()=>{
      //      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL=>{
      //           console.log('File available at',downloadURL)
      //       }); 
      //      })
     
                 

    //  private async getDownloadURL(snap: firebase.storage.UploadTaskSnapshot) {
    //    const url = await snap.ref.getDownloadURL();
    //    //const downloadURL =snap.downloadURL;
    //     this.url =url;  //store the URL
    //     console.log(this.url);
    //   }

         
    // const pathReference = ref(storage, 'images/stars.jpg');
    // const gsReference = ref(this.storage, 'https://firebasestorage.googleapis.com/v0/b/aptmms-e6514.appspot.com/o/files0.02797276454936437%5Bobject%20File%5D?alt=media&token=c69379b2-312d-49c2-943f-2e32015c39ba');
    //   const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/v0/b/aptmms-e6514.appspot.com/o/files0.02797276454936437%5Bobject%20File%5D?alt=media&token=c69379b2-312d-49c2-943f-2e32015c39ba');  
    
    //      console.log(this.httpsReference);
    
  
       
//   getAlldetails()
//   {
//     this._payService.getAlldetails().subscribe(res=>
//       {
      
//         this.paymentdata=res.map(e=>{
//           console.log(e.payload.doc.id)
//           return{
//            id:e.payload.doc.id,
//            ...e.payload.doc.data() as {}
//          }as payment;
//  })
// })
//   }
  ngOnInit(): void {
    //this.getAlldetails()
    {}
  }



   
}


  //  public async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
  //    const url = await snap.ref.getDownloadURL();
  //    this.url = 'https:firebasestorage.googleapis.com/v0/b/aptmms-e6514.appspot.com/o/files0.02797276454936437';  //store the URL
  //    console.log(this.url);
 

//   upload($event:any){
//     //this.path=(<HTMLInputElement>$event.target).value
//    this.path=$event.target.files[0]
//    // this.ref=this.af.ref(this.id);
//    //this.downloadURL=this.path.downloadURL();
//  }
// uploadImage(){
//  console.log(this.path)
//  this.af.upload("/files"+Math.random()+this.path,this.path);

// }