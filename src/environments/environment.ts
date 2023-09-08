// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // apiUrl: "https://swadeshdigital.com/sbsAlumni/api",
  // imgUrl: "https://swadeshdigital.com/sbsAlumni/public/"

  // apiUrl: "http://192.168.1.50:3307/api",
  // imgUrl: "http://192.168.1.50:3307/public/"

  apiUrl: "https://mirchidigital.co.in/sbsAlumni/api",
  imgUrl: "https://mirchidigital.co.in/sbsAlumni/public/",

  roles: {
    SUPERADMIN: "superAdmin",
    ADMIN: 'admin',
    MANAGER: "manager"
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
