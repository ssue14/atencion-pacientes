import { Component, OnInit } from '@angular/core';
import {MenuService} from "../_services/menu.service";
import {Menu} from "../../share/_models/menu";

@Component({
  selector: 'app-navtabs',
  templateUrl: './navtabs.component.html',
  styleUrls: ['./navtabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  private _menuList: Menu[];

  constructor(private _menuService: MenuService) {
    this._menuList = [];
  }

  ngOnInit() {
    this.getMenuList();
  }

  /**
   * Method to get the list of the app menu
   */
  private getMenuList(): Promise<void | any[]>{
    return this._menuService.getMenu()
      .then((res) => this.menuList = res)
      .catch(() => console.log('Should be show error message'))
  }


  //Getters and Setters
  get menuList(): Menu[] {
    return this._menuList;
  }

  set menuList(value: Menu[]) {
    this._menuList = value;
  }
}
