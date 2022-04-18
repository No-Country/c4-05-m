import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  ocupacion: string;
  biografia: string;

  constructor() {

    this.ocupacion = "";
    this.biografia = "";
    
   }
}
