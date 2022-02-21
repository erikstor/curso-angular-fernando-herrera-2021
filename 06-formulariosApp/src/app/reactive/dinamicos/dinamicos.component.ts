import {Component} from '@angular/core';
import {FormArray, FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent {


  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)],],
    favoritos: this.fb.array([
      ['Metal Gear'],
      ['Death Stranding'],
    ], Validators.required)
  })


  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  fieldValidator(field: string) {
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }


  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return
    }

    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required))
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset()
  }


  eliminar(index: number) {
    this.favoritosArr.removeAt(index)
  }

  guardar() {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }


  }

}
