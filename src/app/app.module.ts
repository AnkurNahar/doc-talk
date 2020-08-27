import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorsComponentComponent } from './doctors-component/doctors-component.component';
import { DoctorComponentComponent } from './doctor-component/doctor-component.component';
import { DocProfileComponentComponent } from './doc-profile-component/doc-profile-component.component';
import { DocInfoComponentComponent } from './doc-info-component/doc-info-component.component';
import { CalenderComponentComponent } from './calender-component/calender-component.component';
import { TimeSlotComponentComponent } from './time-slot-component/time-slot-component.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponentComponent,
    DoctorComponentComponent,
    DocProfileComponentComponent,
    DocInfoComponentComponent,
    CalenderComponentComponent,
    TimeSlotComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
