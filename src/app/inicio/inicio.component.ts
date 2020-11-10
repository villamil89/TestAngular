import { Component, OnInit } from '@angular/core';
import { Car } from '../objetos/car';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cars: Car[];

  constructor() {
    this.cars = [
      {vin: 123, year: '1990', brand: 'fdshgd', color: 'red'},
      {vin: 321, brand: 'fdsas3', color: 'blue'},
      {vin: 231, year: '1988', brand: 'dasdas3'}
    ]
  }

  ngOnInit() {
  }

}
