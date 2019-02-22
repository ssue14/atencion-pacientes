export class Menu {
  private _name: string;
  private _icon: string;
  private _link: string;
  private _isHidden: boolean;


  constructor(name: string, icon:string, link: string, isHidden: boolean)  {
    this._name = name;
    this._icon = icon;
    this._link = link;
    this._isHidden = isHidden;
  }


  static getInstance(): Menu {
    return new Menu(null, null, null, false)
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get isHidden(): boolean {
    return this._isHidden;
  }

  set isHidden(value: boolean) {
    this._isHidden = value;
  }
}


