export class Hospital {
  private _id: number;
  private _code: string;
  private _name: string;
  private _region: string;
  private _isActive?: boolean;


  private constructor(id: number, code: string, name: string, region: string, isActive: boolean) {
    this._id = id;
    this._code = code;
    this._name = name;
    this._region = region;
    this._isActive = isActive;
  }

  public static getInstance(): Hospital {
    return new Hospital(0,null,null,null,false);
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }


}
