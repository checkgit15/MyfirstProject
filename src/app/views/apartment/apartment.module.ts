import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { AprListComponent } from './apr-list/apr-list.component';
// @import "~@coreui/chartjs/scss/coreui-chartjs";
import { ChartjsModule } from '@coreui/angular-chartjs';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { BadgeModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

import {  CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA}      from '@angular/core';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { HttpClientModule } from '@angular/common/http';

import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { DetailsofuserComponent } from './detailsofuser/detailsofuser.component';
import { UserDetailService } from './user-details/userdetailservice.service';
import { MaintenanceComponent } from './maintenance-list/maintenance.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { FlatlistComponent } from './flatlist/flatlist.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddflatComponent } from './addflat/addflat.component';
import{AngularFireStorageModule} from '@angular/fire/compat/storage';
import { ImagestorageComponent } from './imagestorage/imagestorage.component';
import { ImageviewComponent } from './imageview/imageview.component';
import{provideStorage,getStorage} from '@angular/fire/storage';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { Payment2021Component } from './payment2021/payment2021.component';
import { Paylist2021Component } from './paylist2021/paylist2021.component';
import { ServiceforinvoiceService } from './invoice-list/serviceforinvoice.service';
// import { AngularFireModule } from '@angular/fire/compat';
// import { environment } from 'src/environments/environment';
import { Pipe, PipeTransform } from '@angular/core';
import { SearchingPipe } from './searching.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { orderBy } from '@angular/fire/firestore';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { SharedDataService } from './shared-data.service';

//import { PipesModule } from '../pipe.module'

@NgModule({
  declarations: [
    AprListComponent,
    InvoiceListComponent,
    UpdateInvoiceComponent,
    UserDetailsComponent,
    PaymentsComponent,
   
    PaymentDetailsComponent,
        DetailsofuserComponent,
        MaintenanceComponent,
        MaintenanceDetailsComponent,
        FlatlistComponent,
        FlatdetailsComponent,
        AdduserComponent,
        AddflatComponent,
        ImagestorageComponent,
        ImageviewComponent,
        PaymentlistComponent,
        Payment2021Component,
        Paylist2021Component,
        SearchingPipe,
        ViewInvoiceComponent,
        
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,ReactiveFormsModule,provideStorage(()=>getStorage()),
    ApartmentRoutingModule,ChartjsModule,GridModule,
    CardModule,BadgeModule,DocsComponentsModule, FormModule,
    AngularFireStorageModule,NgxPaginationModule,OrderModule
  ],
   providers: [UserDetailService,ServiceforinvoiceService,SharedDataService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class ApartmentModule { 
  
}
