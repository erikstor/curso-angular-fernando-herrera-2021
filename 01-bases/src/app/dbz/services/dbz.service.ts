import {Injectable} from "@angular/core";

import {Personaje} from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {


  private _personajes: Personaje[] = [
    {
      nombre: 'Picoro',
      poder: 10000
    },
    {
      nombre: 'Goku',
      poder: 15000
    }
  ]

  constructor() {
  }

  get personajes(): Personaje[] {
    return [...this._personajes]
  }

  agregarPersonaje(personaje: Personaje) {
    return this._personajes.push(personaje)
  }

}
