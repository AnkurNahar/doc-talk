import { Component, OnInit,ViewChild, AfterViewInit,ChangeDetectorRef } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { DocService } from '../services/doc.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { docInfo } from '../shared/doc_info';


@Component({
  selector: 'app-doctor-component',
  templateUrl: './doctor-component.component.html',
  styleUrls: ['./doctor-component.component.css']
})
export class DoctorComponentComponent implements OnInit, AfterViewInit{
  @ViewChild('picker') datePicker: MatDatepicker<Moment>;
  
  doc: docInfo;
  
  constructor(private docservice: DocService,
    private route: ActivatedRoute,
    private location: Location,
    private cdr: ChangeDetectorRef) { }

  

    ngOnInit() {
      const id = +this.route.snapshot.params['id'];
      
    }

  //opening calender as sooon as view loads
  ngAfterViewInit(){
    this.datePicker.open();
    this.cdr.detectChanges();
  }
  
   

  
  
//disabling no-appointment days
//0 - sunday, 6 - saturday
 myFilter = (d: any): boolean => {
    const day = d.day();
    return day !== 0 && day !== 6;
  } 

  goBack(): void {
    this.location.back();
  }

}
