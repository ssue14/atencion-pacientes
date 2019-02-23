import {Component, OnDestroy, OnInit} from '@angular/core';
import {PatientService, PatientInterface, AgeClasificationInterface} from './_service/patient.service';
import {Observable, Subscription} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';
import {CONSTANT} from '../app.constant';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";

export interface FilterTypeInterface {
  id: number;
  code: string;
  name: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent implements OnInit, OnDestroy {

  private _error: boolean;
  private _ess: boolean;
  private _loading: boolean;
  private _message_error: string;
  private _patientFilterType: FilterTypeInterface[];
  private _patients: PatientInterface[];
  private _patientFiltersType: {}[];
  private _patientActiveSub: Subscription;
  private _patientSub: Subscription;
  private _pacientForm: FormGroup;

  medicalHistoryFormControl = new FormControl('', [
    Validators.required
  ]);

  patientNameFormControl = new FormControl('', [
    Validators.required
  ]);

  ageFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _patientService: PatientService, private _formBuilder: FormBuilder) {
    this._ess = true;
    this._error = false;
    this._loading = false;
    this._message_error = null;
    this._patients = [];
    this._patientFiltersType = [
      {id:1,code:'ALL',  name : 'Todos'},
      {id:2,code:'RISK', name : 'Mayor riesgo'},
      {id:3,code:'URG',  name : 'Fumadores urgentes'},
      {id:4,code:'OLD',  name : 'Mas Ancianos'}];

    this._patientActiveSub = new Subscription();
    this._patientSub = new Subscription();
  }

  ngOnInit() {
    this._patientSub = this.getAllPatientsInHospital$(CONSTANT.REGION_ACTIVA).subscribe();
    this.patientForm = this._formBuilder.group({
      'medicalHistoryForm': this.medicalHistoryFormControl,
      'patientName': this.patientNameFormControl,
      'ageForm': this.ageFormControl
    });
  }

  ngOnDestroy(): void {
    this.patientActiveSub.unsubscribe();
    this.patientSub.unsubscribe();
  }

  /**
   * Set a subscription for get all patients filter by hospital.
   */
  private getAllPatientsInHospital$(id: number): Observable<PatientInterface[]> {
    this.cleanAndShowLoading();
    return this._patientService.getAllPatientsInHospital$(id)
      .pipe(tap (p => {
          this.handlerError(null, false,false);
          this.patients = p;
      }, error => {
        this.handlerError(CONSTANT.MESSAGE.ERROR.GENERIC); })
      );
  }


  /**
   * Handler for error process on api request
   * @return {boolean}
   */
  private handlerError(message: string, isError: boolean = true, showMessage: boolean = true): boolean {
    this.message_error = !showMessage ? message : null;
    this.loading = false;
    return this.error = isError;
  }

  /**
   * Set value to init values
   * @return {boolean}
   */
  private cleanAndShowLoading() {
    this.loading = true;
    this.error = false;
    this.message_error = null;
  }

  /**
   * Save Patient
   * @return {boolean}
   */
  private savePatient(patient: PatientInterface): Observable<PatientInterface>{
       this.cleanAndShowLoading();
       return this._patientService.getPriorityAndRiskCalculation(patient)
         .pipe(tap(
           (rs) => {
             this.handlerError(null, false,false);
             patient = rs;
           },err => {
             this.handlerError(err.message)
           }
         ));
    }

  /**
   * Set patient clasification age: CHILD, YOUNG, OLD
   * @return {boolean}
   */
  private patientAgeCalsification(patient: PatientInterface): AgeClasificationInterface{
      patient.ageClasification = this._patientService.ageClasification(patient.data.age);
      return patient.ageClasification;
   }



  // Getters and Setters

  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = value;
  }

  get ess(): boolean {
    return this._ess;
  }

  set ess(value: boolean) {
    this._ess = value;
  }

  get message_error(): string {
    return this._message_error;
  }

  set message_error(value: string) {
    this._message_error = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  get patientForm(): FormGroup {
    return this._pacientForm;
  }

  set patientForm(value: FormGroup) {
    this._pacientForm = value;
  }

  get patients(): PatientInterface[] {
    return this._patients;
  }

  set patients(value: PatientInterface[]) {
    this._patients = value;
  }

  get patientFiltersType(): {}[] {
    return this._patientFiltersType;
  }

  set patientFiltersType(value: {}[]) {
    this._patientFiltersType = value;
  }

  get patientActiveSub(): Subscription {
    return this._patientActiveSub;
  }

  set patientActiveSub(value: Subscription) {
    this._patientActiveSub.unsubscribe();
    this._patientActiveSub = value;
  }

  get patientSub(): Subscription {
    return this._patientSub;
  }

  set patientSub(value: Subscription) {
    this._patientSub.unsubscribe();
    this._patientSub = value;
  }

  get patientFilterType(): FilterTypeInterface[] {
    return this._patientFilterType;
  }

  set patientFilterType(value: FilterTypeInterface[]) {
    this._patientFilterType = value;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
