import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultaComponent} from './consulta/consulta.component';
import {HospitalComponent} from './hospital/hospital.component';
import {PacienteComponent} from './paciente/paciente.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const routes: Routes = [
  {path: 'consulta', component: ConsultaComponent},
  {path: 'hospital', component: HospitalComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
