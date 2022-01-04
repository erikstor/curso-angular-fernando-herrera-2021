import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'heroeImagen',
})
export class HeroeImagenPipe implements PipeTransform {
  transform(value: Heroe): string {
    let path = './assets/no-image.png';

    if (value.alt_img) {
      path = value.alt_img;
    } else if (value.id) {
      path = `./assets/heroes/${value.id}.jpg`;
    }

    return path;
  }
}
