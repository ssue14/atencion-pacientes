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
}
