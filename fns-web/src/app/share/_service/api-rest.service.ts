import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';


@Injectable()
export class ApiRestService {
  private _headersHttp =  {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor() { }

  public getHeaders() {
    return this._headersHttp;
  }
}
