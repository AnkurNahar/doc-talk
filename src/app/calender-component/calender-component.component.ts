import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';




@Component({
  selector: 'app-calender-component',
  templateUrl: './calender-component.component.html',
  styleUrls: ['./calender-component.component.css']
})



export class CalenderComponentComponent implements OnInit {
  @ViewChild('picker') datePicker: MatDatepicker<Date>;
  
  
  constructor() {}

  ngOnInit(): void {}

  //opening calender as sooon as view loads
  ngAfterViewInit(){
    this.datePicker.open();
}
  
/* myFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  } */

}
