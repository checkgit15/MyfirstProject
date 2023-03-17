import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DefaultLayoutComponent } from './containers';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './views/pages/forgetpassword/forgetpassword.component';

import { LoginComponent } from './views/pages/login/login.component';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { PhonenumberComponent } from './views/pages/phonenumber/phonenumber.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { VerifyotpComponent } from './views/pages/verifyotp/verifyotp.component';

 
const routes: Routes = [
 { 
  path: '',
  component: LoginComponent,
  data: {
    title: 'Home'
  },
},
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component:DefaultLayoutComponent,
    // data: {
      // title: 'Home'
    // },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      //  {
      // path: 'maintenance',
      // loadChildren: () =>
      // import('./views/apartment/apartment.module').then((m) => m.MaintenanceModule)
      //   },

      {
        path: 'apartment',
        loadChildren: () =>
          import('./views/apartment/apartment.module').then((m) => m.ApartmentModule)
      },
    
      
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./views/charts/charts.module').then((m) => m.ChartsModule)
      // },

      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ], 
  },

    {
      path: '',
      component:DefaultLayoutComponent,
    children: [
      

        {
         path: 'charts',
         loadChildren: () =>
           import('./views/charts/charts.module').then((m) => m.ChartsModule)
       }, 
       {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
        
     ]
   
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },


  {
    path: 'forgetpassword',
    component: ForgetpasswordComponent,
    data: {
      title: 'forgotpassword'
    }
  },

  {
    path: 'phonenumber',
    component: PhonenumberComponent,
    data: {
      title: 'phonenumber'
          }
  },

  {
    path: 'verifyotp',
    component: VerifyotpComponent,
    data: {
      title: 'verifyotp'
    }
  },


  
  {path: '**', redirectTo: '404'},

  
  
  // {
  //   path: 'maintenance',
  //   component:MaintenanceComponent,
  //   data: {
  //     title: 'maintenanace'
  //   }
  // },
  
];
           


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
