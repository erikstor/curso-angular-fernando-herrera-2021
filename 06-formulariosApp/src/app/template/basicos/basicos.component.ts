import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: []
})
export class BasicosComponent implements OnInit {


  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'rxt',
    precio: 10,
    existencia: 100
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  // guardar(form: NgForm) {
  guardar() {
    console.log(this.miFormulario)

    if (this.miFormulario?.controls['precio']?.value < 0) {
      return
    }

    console.log('post')
    this.miFormulario.resetForm({
      producto: 'asdf',
      precio: 0,
      existencia: 0
    })

  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto'].touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.invalid && this.miFormulario?.controls['precio'].touched
  }

}
