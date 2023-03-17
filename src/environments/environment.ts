// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'aptmms-e6514',
    appId: '1:551245114744:web:75eb703dbad171a5f1ac8d',
    storageBucket: 'aptmms-e6514.appspot.com',
    apiKey: 'AIzaSyB-0sd3b1zo89Abh_Niti8V37BcHCJcDZc',
    authDomain: 'aptmms-e6514.firebaseapp.com',
    messagingSenderId: '551245114744',
  },
  production: false,
  stripe:{
    key:'stripe listen --api-key sk_test_51M52thSCYEQ5K2jRQgmVvVffRPiP1u72ccI95K7q6JiOtqkpAU2vl7n0OESTVzQYCPMl7DU7QVFAe0m3ck8xZYcq00OqJmzNNa'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
