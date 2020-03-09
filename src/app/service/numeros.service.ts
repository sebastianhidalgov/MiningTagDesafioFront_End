import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Numeros } from './numeros';

@Injectable({
  providedIn: 'root'
})
export class NumeroService {

  constructor( private http: HttpClient ) { }


/*   //Link trae la data */

  getNumeroEjercicio1() {
    return this.http.get(`http://patovega.com/prueba_frontend/array.php`);
  }
  getNumeroEjercicio2() {
    return this.http.get(`http://patovega.com/prueba_frontend/dict.php`);
  }


}
