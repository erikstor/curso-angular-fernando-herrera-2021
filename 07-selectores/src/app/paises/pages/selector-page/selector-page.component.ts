import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {switchMap, tap} from "rxjs";

import {PaisServiceService} from "../../services/pais-service.service";
import {PaisSmall} from "../../interfaces/paises.interface";


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    region: ['', Validators.required,],
    pais: ['', Validators.required,],
    // frontera: [{value: '', disabled: true}, Validators.required,],
    frontera: ['', Validators.required,],
  })

  //llenar selectores

  paises: PaisSmall[] = []
  regiones: string[] = []
  // fronteras: string [] = []
  fronteras: PaisSmall [] = []

  // UI
  cargando: boolean = false

  constructor(private fb: FormBuilder,
              private paisesServices: PaisServiceService) {
  }

  ngOnInit(): void {
    this.regiones = this.paisesServices.regiones;

    //cuando cambie la region
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap((_) => {
          this.miFormulario.get('pais')?.reset('')
          this.cargando = true
        }),
        switchMap(region => this.paisesServices.getPaisesPerRegion(region))
      )
      .subscribe(paises => {
        this.paises = paises
        this.cargando = false
      })

    //cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap((_) => {
          this.fronteras = []
          this.miFormulario.get('frontera')?.reset('')
          this.cargando = true
        }),


        switchMap(codigo => this.paisesServices.getPaisesPerAlphacode(codigo)),
        switchMap(pais => this.paisesServices.getPaisesPerAlphacodes(pais?.borders!))
      )
      .subscribe(paises => {
        this.fronteras = paises || []
        this.cargando = false
      })

  }

  guardar() {
    console.log(this.miFormulario.value)
  }

}
