import {Component} from "@angular/core";

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
    <button (click)="acumular(+1)">+1</button>
    <span>{{numero}}</span>
    <button (click)="acumular(-1)">-1</button>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumularTarea(base)">+{{base}}</button>
    <span>{{numero2}}</span>
    <button (click)="acumularTarea(-base)">-{{base}}</button>
  `
})
export class ContadorComponent {

  titulo: string = 'Contador App';
  numero: number = 10

  base: number = 5
  numero2: number = 0

  acumular(valor: number) {
    this.numero += valor
  }

  acumularTarea(valor: number) {
    this.numero2 += valor
  }

}
