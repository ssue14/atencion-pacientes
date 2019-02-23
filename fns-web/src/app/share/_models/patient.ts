export class Patient {
  private _id: number;
  private _medical_history: string;
  private _name: string;
  private _age: number;
  private _weight_height?: number;
  private _smoker?: boolean;
  private _year_smoker?: number;
  private _priority?: number;
  private _risk?: number;
  private _on_diet?: boolean;


  private constructor(id: number, medical_history: string, name: string, age: number, weight_height: number, smoker: boolean, year_smoker: number, priority: number, risk: number, on_diet: boolean) {
    this._id = id;
    this._medical_history = medical_history;
    this._name = name;
    this._age = age;
    this._weight_height = weight_height;
    this._smoker = smoker;
    this._year_smoker = year_smoker;
    this._priority = priority;
    this._risk = risk;
    this._on_diet = on_diet;
  }

  public static getInstance(): Patient {
    return new Patient(0, null, null, 0, 0, false, 0, 0, 0 , false);
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get medical_history(): string {
    return this._medical_history;
  }

  set medical_history(value: string) {
    this._medical_history = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get weight_height(): number {
    return this._weight_height;
  }

  set weight_height(value: number) {
    this._weight_height = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }

  get risk(): number {
    return this._risk;
  }

  set risk(value: number) {
    this._risk = value;
  }

  get smoker(): boolean {
    return this._smoker;
  }

  set smoker(value: boolean) {
    this._smoker = value;
  }

  get year_smoker(): number {
    return this._year_smoker;
  }

  set year_smoker(value: number) {
    this._year_smoker = value;
  }

  get on_diet(): boolean {
    return this._on_diet;
  }

  set on_diet(value: boolean) {
    this._on_diet = value;
  }
}
