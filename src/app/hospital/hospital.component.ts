///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, OnDestroy, OnInit} from '@angular/core';
import {HospitalService} from './_services/hospital.service';
import {Observable, Subscription} from 'rxjs/index';
import {Hospital} from '../share/_models/hospital';
import {tap} from 'rxjs/internal/operators';
import {CONSTANT} from '../app.constant';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})

export class HospitalComponent implements OnInit, OnDestroy {

  private _error: boolean;
  private _loading: boolean;
  private _message_error: string;

  private _hospitalActive = Hospital;
  private _hospitals: Hospital[];

  private _hospitalsSub: Subscription;
  private _hospitalActiveSub: Subscription;

  constructor(private _hospitalService: HospitalService) {
    this._error = false;
    this._loading = false;
    this._message_error = null;
    this._hospitals = [];

    this._hospitalsSub = new Subscription();
  }

  ngOnInit() {
    this.hospitalsSub = this.getAllHospitals$().subscribe();
  }

  ngOnDestroy(): void {
    this.hospitalsSub.unsubscribe();
  }

  /**
   * Set a subscription for get all hospitals.
   */
  private getAllHospitals$(): Observable<Hospital[]> {
    this.cleanAndShowLoading();
    return this._hospitalService.getAllHospitals$()
      .pipe(tap(v => {
        this.loading = false;
        this.error = false;
        this.hospitals = v;
        this.hospitalActive = this.hospitals.find(h => h.isActive);
      }, error => {
        this.handlerError(CONSTANT.MESSAGE.ERROR.GENERIC);
      }));
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


  // Getters and Setters


  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = value;
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(value: boolean) {
    this._loading = value;
  }

  get message_error(): string {
    return this._message_error;
  }

  set message_error(value: string) {
    this._message_error = value;
  }

  get hospitalActive(): any {
    return this._hospitalActive;
  }

  set hospitalActive(value: any) {
    this._hospitalActive = value;
  }

  get hospitals(): Hospital[] {
    return this._hospitals;
  }

  set hospitals(value: Hospital[]) {
    this._hospitals = value;
  }

  get hospitalsSub(): Subscription {
    return this._hospitalsSub;
  }

  set hospitalsSub(value: Subscription) {
    this._hospitalsSub = value;
  }
}
