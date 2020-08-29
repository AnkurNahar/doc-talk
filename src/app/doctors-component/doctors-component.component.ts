import { Component, OnInit } from '@angular/core';
import { docInfo } from '../shared/doc_info';
import { DOCS } from '../shared/docs';




@Component({
  selector: 'app-doctors-component',
  templateUrl: './doctors-component.component.html',
  styleUrls: ['./doctors-component.component.css']
})



export class DoctorsComponentComponent implements OnInit {
  //should go to service
  docs: docInfo[] = DOCS;

  selectedDoc: docInfo;

  constructor() { }

  ngOnInit(): void {
  }

//on selecting doctor
onSelect(doc: docInfo) {
    this.selectedDoc = doc;
  }
}
