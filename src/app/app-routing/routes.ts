import { Routes } from '@angular/router';

import { DoctorsComponentComponent } from '../doctors-component/doctors-component.component';
import { DoctorComponentComponent } from '../doctor-component/doctor-component.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'home',  component: DoctorsComponentComponent },
    { path: 'doc/:id',     component: DoctorComponentComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];