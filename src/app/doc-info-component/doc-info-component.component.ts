import { Component, OnInit,Input } from '@angular/core';
import { docInfo } from '../shared/doc_info';

@Component({
  selector: 'app-doc-info-component',
  templateUrl: './doc-info-component.component.html',
  styleUrls: ['./doc-info-component.component.css']
})
export class DocInfoComponentComponent implements OnInit {

  @Input()
  doc: docInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
