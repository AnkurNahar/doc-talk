import { Component, OnInit } from '@angular/core';
import { docInfo } from '../shared/doc_info'; 
import { DocService } from '../services/doc.service';



@Component({
  selector: 'app-doctors-component',
  templateUrl: './doctors-component.component.html',
  styleUrls: ['./doctors-component.component.css']
})



export class DoctorsComponentComponent implements OnInit {
  
  docs: docInfo[];

  selectedDoc: docInfo;

  constructor(private docService: DocService) { }

  ngOnInit(): void {
    this.docs = this.docService.getDocs();
  }

//on selecting doctor
onSelect(doc: docInfo) {
    this.selectedDoc = doc;
  }
}
