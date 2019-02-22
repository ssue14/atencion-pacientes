import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs/index";
//import {Menu} from "../../share/_models/Menu";
import {CONSTANT} from "../../app.constant"
import {HttpClient} from "@angular/common/http";
import {Menu} from "../../share/_models/menu";

@Injectable()
export class MenuService {

  constructor(private http: HttpClient){
  }

  public getMenu(): Promise<any[]> {
    return this.http.get<Menu[]>(CONSTANT.GET_MENU)
      .toPromise()
  }

}
