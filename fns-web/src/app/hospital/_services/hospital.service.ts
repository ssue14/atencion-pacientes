import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Hospital} from '../../share/_models/hospital';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export interface HospitalInterface {
  id: number;
  code: string;
  name: string;
  region: string;
  isActive: boolean;
}

@Injectable()
export class HospitalService {

  private _path = 'hospitals';
  private _hospitalActive: Hospital;


  constructor(private http: HttpClient) {
  }

  /**
   * Get all Hospitals
   * @return Observable<any>
   */
  public getAllHospitals$(): Observable<any> {
    return this.http.get( environment.paths[this._path], httpOptions);
  }

  /**
   * Get Hospital by region
   * @param idRegion
   * @return Observable<any>
   */
  public getHospitalByRegion$(idRegion: number): Observable<any> {
    return this.http.get( environment.paths[this._path], httpOptions);
  }

  // Getter and Setter
  get path(): string {
    return this._path;
  }

  set path(value: string) {
    this._path = value;
  }


  get hospitalActive(): Hospital {
    return this._hospitalActive;
  }

  set hospitalActive(value: Hospital) {
    this._hospitalActive = value;
  }
}
