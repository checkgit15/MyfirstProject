 import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AprListComponent} from './apr-list/apr-list.component';
import { DetailsofuserComponent } from './detailsofuser/detailsofuser.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { MaintenanceComponent } from './maintenance-list/maintenance.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { FlatlistComponent } from './flatlist/flatlist.component';
import { FlatdetailsComponent } from './flatdetails/flatdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ImagestorageComponent } from './imagestorage/imagestorage.component';
import { ImageviewComponent } from './imageview/imageview.component';
import { AddflatComponent } from './addflat/addflat.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { Payment2021Component } from './payment2021/payment2021.component';
import { Paylist2021Component } from './paylist2021/paylist2021.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
// import {ChartsComponent} from 'views/charts';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Apartment',
        },

       children: [
        {
          path: '',

          data: {
            title: '2022',
              },

        
                        
                                               
              
              children:[
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'payment-details'
        },
         {
           path:'payment2021',
           component:Payment2021Component,
           
           
            
         },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'paymentlist'
      },
     
       {
         path:'paymentlist',
      component:PaymentlistComponent,
         data:{title:'pay'}
        },     
                            
       
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-details'
      },

      {
        path:'user-details',
        component:UserDetailsComponent,
        data:{title:"User List" }
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'detailsofuser'
      },
                 
      {
        path:'detailsofuser/:id',
        component:DetailsofuserComponent,
        data:{ title:"userprofile"}

      },


      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'imagestorage'
      },

      {
        path:'imagestorage',
        component:ImagestorageComponent,
        data:{ title:"up/downloadaa" }
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'imageview'
      },

      {
        path:'imageview/:id',
        component:ImageviewComponent,
        data:{ title:"view"}
      },

        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'payments'
        },
        {
          path:'payments',
          component:PaymentsComponent,
          data:{ title:"stripe"}
        },


         {
          path: '',
          pathMatch: 'full',
          redirectTo: 'payment-details'
        },
         {
           path:'payment-details',
           component:PaymentDetailsComponent,
           data:{title:"payment-month"}
   
         },
         {
          path: '',
          pathMatch: 'full',
          redirectTo: 'paymentlist'
        },
         {
           path:'paymentlist/:id',
           component:PaymentlistComponent,
           data:{title:"due"}
 
         },

         {
          path:'paymentlist2021',
          component:PaymentlistComponent,
          data:{title:"payment-month"}
  
        },
        {
         path: '',
         pathMatch: 'full',
         redirectTo: 'paymentlist'
       },
        {
          path:'paylist2021/:id',
          component:Paylist2021Component,
          data:{title:"due"}

        },
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'invoice-list'
        },
      
      {
        path:'invoice-list',
        component:InvoiceListComponent,
        data:{title:"Invoice List"}
      },
      
      {
        path:'update-invoice/:id',
        component:UpdateInvoiceComponent,
        data:{title:"Update Invoice"},
 
        children:[
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'view-invoice'
          },
           {
             path:'view-invoice/:id',
             component:ViewInvoiceComponent,
             
             
              
           },]
      },


      // {
      //   path:'update-invoice/:id',
      //   component:UpdateInvoiceComponent,
      //   data:{title:"Update Invoice"}

      // },

       {
         path: '',
         pathMatch: 'full',
       redirectTo: 'maintenance'
       },

      {
        path:'maintenance',
        component:MaintenanceComponent,
        data:{title:"2022"}
      },

    
      {
        path: '',
        pathMatch:'full',
        redirectTo:'maintenance-details'
      },

      {
        path:'maintenance-details',
        component:MaintenanceDetailsComponent,
        data:{title:"maintenanceinfo"}
      },
         
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'flatdetails'
        },
                   
        {
          path:'flatdetails/:id',
          component:FlatdetailsComponent,
          data:{title:"flatinfo"}
  
        },

        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'flatlist'
        },

        {
          path:'flatlist',
          component:FlatlistComponent,
          data:{title:"Flat List" }
        },

        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'adduser'
        },
                   
        {
          path:'adduser/:id',
          component:AdduserComponent,
          data:{title:"CRUD"}
  
        },

         {
          path:'adduser',
          component:AdduserComponent,
           data:{title:"CRUD"}
  
        },
        
        
        //for flats
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'addflat'
        },
                   
        {
          path:'addflat/:id',
          component:AddflatComponent,
          data:{title:"CRUD"}
  
        },

         {
          path:'addflat',
          component:AddflatComponent,
           data:{title:"CRUD"},
                  
  },

  {
    path:'view-invoice',
    component:ViewInvoiceComponent,
    data:{title:"invoice"}

  },
  {
    path:'view-invoice/:id',
    component:ViewInvoiceComponent,
    data:{title:"invoice"}

  },

         
         ]
      }
    
    ]
   }
  ]




  children:[
    {
    path: '',
    data: {
      title: '2021',
        },
 
             
 children:[
   
  {
   path: '',
   pathMatch: 'full',
   redirectTo: 'payment-details'
 },
  {
    path:'payment-details',
    component:PaymentDetailsComponent,
    data:{
      title:""
    },
  }
]
}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule { }
