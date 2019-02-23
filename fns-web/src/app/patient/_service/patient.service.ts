import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {environment} from '../../../environments/environment';
import {Patient} from '../../share/_models/patient';
import {ApiRestService} from '../../share/_service/api-rest.service';
import {tap} from "rxjs/internal/operators";


export interface AgeClasificationInterface {
  type: string,
  range: {},
  group: number
}

export interface PatientInterface {
  data: Patient;
  ageClasification: AgeClasificationInterface;
}

@Injectable()
export class PatientService {
  private _pathGetAllPatientsByHospital: string;
  private _pathGetAllPatientsUrgentSmoker: string;
  private _pathGetAllHigherRiskPatients: string;
  private _pathGetAllPatientsAwaiting: string;
  private _priorityAndRiskCalculation: string;
  private _patientActive: Patient;

  constructor(private http: HttpClient, private apiRestService: ApiRestService) {
    this._pathGetAllPatientsByHospital = 'patients_hospital';
    this._pathGetAllPatientsUrgentSmoker = 'smoker_urgents_patients';
    this._pathGetAllHigherRiskPatients = 'higher_risk_patients';
    this._pathGetAllPatientsAwaiting = 'patients_awaiting';
    this._priorityAndRiskCalculation = 'priority_and_risk_calulation';
  }

  /**
   * Get All Patients by hospital
   * @param idHospital
   * @return Observable<any>
  */
  public getAllPatientsInHospital$(idHospital): Observable<any> {
    return this.http.get( environment.paths[this._pathGetAllPatientsByHospital] + idHospital, this.apiRestService.getHeaders());
  }

  /**
   * Get All smoker Patients and will have urgent medical consultation
   * @param idHospital
   * @return Observable<any>
   */
  public getAllPatientsUrgentSmoker$(): Observable<any> {
    return this.http.get( environment.paths[this._pathGetAllPatientsUrgentSmoker], this.apiRestService.getHeaders());
  }

  /**
   * Get All Higher Risks Patients
   * @param idHospital
   * @return Observable<any>
   */
  public getAllHigherRiskPatients$(): Observable<any> {
    return this.http.get( environment.paths[this._pathGetAllHigherRiskPatients], this.apiRestService.getHeaders());
  }

  /**
   * Get All Higher Risks Patients
   * @param patient
   * @return <any>
   */
  public getPriorityAndRiskCalculation(patient: PatientInterface): Observable<any> {
    return this.http.post(environment.paths[this._priorityAndRiskCalculation], patient, this.apiRestService.getHeaders());
  }

  /**
   * Clasification of the  patient into atention care
   * @param patient
   * @return Observable<Patient>
   *     */
  public ageClasification(age): AgeClasificationInterface {
    let rangeOfchild = 3;
    let patientAgeRange = {};
    let patientType = 'CHILD';
    let agesRanges = [{from:1, to:5}, {from:6,to:12}, {from:13, to:15},{from:16, to:40}, {from:60, to:100}];
    let idxRange = agesRanges.findIndex(range => age >=range.from && age <= range.to);

    if (idxRange ===3){
      patientType = 'YOUNG'
    }else if (idxRange===4){
      patientType = 'OLD'
    }
    return { type: patientType, range: agesRanges[0],group: idxRange };
  }

  /**
   * Add new patient into atention care
   * @param patient
   * @return Observable<Patient>
   *     */
   public atentionCare(patient: Patient): Observable<any> {
    this.patientActive = patient;

    return new Observable (s => s.next(patient));
  }

// Getter and Setter

get pathGetAllPatientsByHospital(): string {
  return this._pathGetAllPatientsByHospital;
}

set pathGetAllPatientsByHospital(value: string) {
  this._pathGetAllPatientsByHospital = value;
}

get pathGetAllPatientsUrgentSmoker(): string {
  return this._pathGetAllPatientsUrgentSmoker;
}

set pathGetAllPatientsUrgentSmoker(value: string) {
  this._pathGetAllPatientsUrgentSmoker = value;
}

get pathGetAllHigherRiskPatients(): string {
  return this._pathGetAllHigherRiskPatients;
}

set pathGetAllHigherRiskPatients(value: string) {
  this._pathGetAllHigherRiskPatients = value;
}

get pathGetAllPatientsAwaiting(): string {
  return this._pathGetAllPatientsAwaiting;
}

set pathGetAllPatientsAwaiting(value: string) {
  this._pathGetAllPatientsAwaiting = value;
}

get patientActive(): Patient {
  return this._patientActive;
}

set patientActive(value: Patient) {
  this._patientActive = value;
}
}
