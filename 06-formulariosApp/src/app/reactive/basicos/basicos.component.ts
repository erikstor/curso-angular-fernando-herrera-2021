import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('rtx 4080ti'),
  //   'precio': new FormControl(0),
  //   'existencias': new FormControl(0)
  // })

  ngOnInit() {
    this.miFormulario.setValue({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    precio: [null, [Validators.required, Validators.min(0)]],
    existencias: [null, [Validators.required, Validators.min(0)]],
  })

  constructor(private fb: FormBuilder) {
  }

  fieldIsInvalid(field: string) {
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }

  guardar() {

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset()
  }


}
