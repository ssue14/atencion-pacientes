import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HospitalComponent} from './hospital/hospital.component';
import {MedicalConsultationComponent} from './medical-consultation/medical-consultation.component';
import {PatientComponent} from './patient/patient.component';
import {PatientCareComponent} from "./patient-care/patient-care.component";
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hospital', component: HospitalComponent},
  {path: 'medical_consultation', component: MedicalConsultationComponent},
  {path: 'patient', component: PatientComponent},
  {path: 'patient_care', component: PatientCareComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
