import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-care',
  templateUrl: './patient-care.component.html',
  styleUrls: ['./patient-care.component.scss']
})
export class PatientCareComponent implements OnInit {
  
  private status = [{id:1, name:'En espera'}, {id:2, name:'Urgencia'}, {id:3, name: 'CGI'}];
  
  constructor() { }

  ngOnInit() {
  }

}
