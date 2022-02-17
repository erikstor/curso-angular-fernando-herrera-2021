import {Component} from '@angular/core';

interface Persona {
  nombre: string
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Erik',
    favoritos: [
      {
        id: 1,
        nombre: 'lol'
      },
      {
        id: 2,
        nombre: 'Dofus'
      },
    ]
  }

  guardar() {
    console.log('form posted')
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

  agregarJuego() {
    const nuevoJuegoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoJuegoFavorito})
    this.nuevoJuego = ''
  }

}
