import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'erik'
  nombreUpper: string = 'ERIK'
  nombreCompleto: string = 'eRiK'

  fecha: Date = new Date(); // el dia de hoy

}
