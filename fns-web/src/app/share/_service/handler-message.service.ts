import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandlerMessageService {

  private _error: boolean;
  private _loading: boolean;
  private _message_error: string;
  constructor() { }

  /**
   * Handler for error process on api request
   * @return {boolean}
   */
  private handlerError(message: string, isLoading: boolean = false, isError: boolean = true, showMessage: boolean = true): boolean {
    this._message_error = !showMessage ? message : null;
    this._loading = isLoading;
    return this._error = isError;
  }
}
