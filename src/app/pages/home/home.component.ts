import { Component, OnInit } from '@angular/core';
import { NumeroService } from '../../service/numeros.service';
import { element } from 'protractor';
import { async } from '@angular/core/testing';
import { ArrayType } from '@angular/compiler';
import { findIndex } from 'rxjs/operators';
import { SlicePipe } from '@angular/common';
import {Repetidos} from '../../service/repetidos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  ngOnInit(): void {
  }

  cargando = true;
  datanum: Array<any> =  [];
  datanumdos: any = [];
  public arr = [];
  public loco = [];


  repetidos: any = [];

  constructor(private numeroservice: NumeroService) {
    this.numeroservice.getNumeroEjercicio1()
      .subscribe((data: any) => {
        this.datanum = data.data;

       /* for (let x = 0; x <= this.datanum.length; x++) {
          let temp = this.datanum[x];
          let contador = 1;
        //  if(this.datanum[x + 1] != "") {
            for (let i = x +1; i <= this.datanum.length; i++) {
              if (this.datanum[i] === temp) {
                contador++;
                this.datanum.splice(i, 1);
              }
             // this.arr = this.datanum;
            }

        // this.repetidos.push(new Array(x, contador));
          this.repetidos.push(new Repetidos(temp, contador));
          console.log(this.repetidos);
          console.log(this.datanum[x]);
          console.log(contador);
        }*/
      });

    this.numeroservice.getNumeroEjercicio2()
      .subscribe((data: any) => {
        this.datanumdos = JSON.parse(data.data);
      });


  }
}



