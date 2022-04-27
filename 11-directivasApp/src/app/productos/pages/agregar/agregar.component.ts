import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  texto1: string = 'Erik Stor'
  color: string = 'red'

  constructor(private fb: FormBuilder) {
  }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false
  }

  cambiarNombre(): void {
    this.texto1 = Math.random().toString()
  }

  cambiarColor(): void {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }

}
