import {Component} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: []
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Erik'
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }


  //i18nPlural

  clientes: string [] = [
    'erik',
    'otra',
    'persona',
  ]

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarPersona() {

    switch (this.genero) {
      case 'masculino':
        this.nombre = 'Melisa'
        this.genero = 'femenino'
        break;
      default:
        this.nombre = 'Erik'
        this.genero = 'masculino'
    }

  }

  borrarCliente() {
    this.clientes.pop()
  }


  // KeyValue Pipe

  persona = {
    nombre: 'Erik',
    direccion: 'Cali, Colombia'
  }

  // Json Pipe

  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: true,
    },
    {
      nombre: 'Aquaman',
      vuela: true,
    },
  ]


  //Async pipe
  miObservable = interval(1000)

  promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Salio bien amigo')
    }, 1000)
  })

}
