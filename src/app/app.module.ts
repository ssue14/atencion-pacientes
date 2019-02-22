import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MaterialModule} from './material.module';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { PatientComponent } from './patient/patient.component';
import { MedicalConsultationComponent } from './medical-consultation/medical-consultation.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavTabsComponent } from './navigation/navtabs/navtabs.component';
import { PatientCareComponent } from './patient-care/patient-care.component';
import { MenuService} from "./navigation/_services/menu.service";
import {HospitalService} from "./hospital/_services/hospital.service";
import {PatientService} from "./patient/_service/patient.service";
import {ApiRestService} from "./share/_service/api-rest.service";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MedicalConsultationComponent,
    HeaderComponent,
    HospitalComponent,
    HomeComponent,
    NavTabsComponent,
    PatientComponent,
    SidenavListComponent,
    SigninComponent,
    SignupComponent,
    PatientCareComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports:[
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MenuService, HospitalService, PatientService, ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
