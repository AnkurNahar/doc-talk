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
  
  docs: docInfo[];
  selectedDoc: docInfo;
  filterDays: number[] = [5,6];

  
  constructor(private docservice: DocService,
    private route: ActivatedRoute,
    private location: Location,
    private cdr: ChangeDetectorRef) { }

  

    ngOnInit() {
      const id = this.route.snapshot.params['id'];
      this.docs = this.docservice.getDocs();

     

       for (let index = 0; index < this.docs.length; index++) {
        if(this.docs[index].name == id){
          this.selectedDoc = this.docs[index];
          break;
        }
        
      } 

   // if conditions not working   
  if(!this.selectedDoc.availibility.hasOwnProperty('sun')){
    this.filterDays.push[0];
  }

  if(!this.selectedDoc.availibility.hasOwnProperty('mon')){
    this.filterDays.push[1];
  }

  if(!this.selectedDoc.availibility.hasOwnProperty('tue')){
    this.filterDays.push[2];
  }
    
  if(!this.selectedDoc.availibility.hasOwnProperty('wed')){
    this.filterDays.push[3];
  }

  if(!this.selectedDoc.availibility.hasOwnProperty('thu')){
    this.filterDays.push[4];
  }

  if(!this.selectedDoc.availibility.hasOwnProperty('fri')){
    this.filterDays.push[5];
  }

  if(!this.selectedDoc.availibility.hasOwnProperty('sat')){
    this.filterDays.push[6];
  } 

      
      
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
    let filter: boolean = true;
    this.filterDays.forEach(filterday => {
      if(day==filterday){
        filter = false;
      }
    });
    return filter;
  } 

  goBack(): void {
    this.location.back();
  }

}
