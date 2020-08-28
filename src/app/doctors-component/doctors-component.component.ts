import { Component, OnInit } from '@angular/core';
import { docInfo } from '../shared/doc_info';

@Component({
  selector: 'app-doctors-component',
  templateUrl: './doctors-component.component.html',
  styleUrls: ['./doctors-component.component.css']
})
export class DoctorsComponentComponent implements OnInit {
  //should go to service
  docs: docInfo[] = [
    {
      name: 'doc1',
      org: 'hospital1'
    },
    {
      name: 'doc2',
      org: 'hospital2'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
