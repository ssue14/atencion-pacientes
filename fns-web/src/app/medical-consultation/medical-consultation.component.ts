import { Component, OnInit } from '@angular/core';

export interface TypeInteface{
  id: number,
  name: string
}

@Component({
  selector: 'app-medical-consultation',
  templateUrl: './medical-consultation.component.html',
  styleUrls: ['./medical-consultation.component.scss']
})

export class MedicalConsultationComponent implements OnInit {

  private _statusSelected: {};
  private _medicalConsultationStatus: TypeInteface[];

  constructor() {
  }

  ngOnInit() {
    this._medicalConsultationStatus = [{id:1, name: 'desocupada'},{id: 2, name: 'ocupada'}];
    this._statusSelected=this._medicalConsultationStatus[0];
  }


  get statusSelected(): {} {
    return this._statusSelected;
  }

  get medicalConsultationStatus():TypeInteface[] {
    return this._medicalConsultationStatus;
  }
}
