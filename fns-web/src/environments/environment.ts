// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'local',
  apiUrl: 'http://localhost',
  paths: {
    hospitals: '/api/hospital/v1/hospitals',
    patients: '/api/patient/v1/patiens',
    patients_hospital: '/api/patient/v1/patiens/hospital/',
    patients_urgents_smoker: '/api/patient/v1/patiens/urgents_smoker',
    higher_risk_patients: '/api/patient/v1/patiens/higher_risk_patients',
    patients_awaiting: '/api/patient/v1/patiens/patients_awaiting',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
