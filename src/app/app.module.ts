import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DoctorsComponentComponent } from './doctors-component/doctors-component.component';
import { DoctorComponentComponent } from './doctor-component/doctor-component.component';
import { DocInfoComponentComponent } from './doc-info-component/doc-info-component.component';
import { CalenderComponentComponent } from './calender-component/calender-component.component';
import { TimeSlotComponentComponent } from './time-slot-component/time-slot-component.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';





import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponentComponent,
    DocInfoComponentComponent,
    CalenderComponentComponent,
    TimeSlotComponentComponent,
    DoctorComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatMomentDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
