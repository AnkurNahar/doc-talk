import { Injectable } from '@angular/core';
import { docInfo } from '../shared/doc_info';
import { DOCS } from '../shared/docs';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor() { }

  getDocs(): docInfo[] {
    return DOCS;
  }

  
  
}
