import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  
  {
    name: 'Appartment',
    url: '/apartment',
    
    iconComponent: { name: 'cil-drop' },
    children: [

      {
        name: 'Users',
        url: '/apartment/user-details',
      },
   
      {
        name: 'Flats',
        url: '/apartment/flatlist',
      },
      {
        name: 'Payment',
        url: '/apartment/payment-details',
      },

      // {
      //   name:'forgetpwd',
      //   url: '/forgetpwd',
      // },

      // {
      //   name: 'Maintenance',
      //   url: '/apartment/maintenance',
      // },
      //  {
      //    name: 'childinvoice',
      //    url: '/pages/page/Page404Component',
      //  },
        {
        name: 'Invoices',
        url: '/apartment/invoice-list',
      },

      // {
      //   name: 'Stripe',
      //   url: '/apartment/payments',
      //      },
         
    
    ]
  },
  

  // {
  //   name: 'Chart',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-drop' },
  //   children: [

  //     {
  //       name: 'Users',
  //       url: '/apartment/user-details',
  //     },
  
  //   ]},     
  // {
  //   name: 'Flat Maintenance',
  //   url: '/charts',
  //   iconComponent: { name: 'cil-chart-pie' }
  // },

 
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  
  // {
  //   name: 'Registration and Login',
  //   //url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: 'pages/login'
  //     },
  //     {
  //       name: 'Register',
  //       url: 'pages/register'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500'
  //     }
  //   ]
  // },
    
  
]

export const navItems1: INavData[] = [
  {
    name: 'Dashboard',
    url: '/charts',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  
  {
    name: 'Charts',
    url: '/charts'
  }
]
