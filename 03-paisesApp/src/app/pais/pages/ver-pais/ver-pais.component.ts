import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap, tap} from "rxjs";

import {PaisService} from "../../services/pais.service";
import {Pais} from "../../interfaces/pais.interface";


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {

  pais!: Pais

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {
  }

  ngOnInit(): void {

    // FORMA 1
    // this.activatedRoute.params.subscribe(({id}) => {
    //   console.log(id)
    //
    //   this.paisService.getPaisPorCodigo(id)
    //     .subscribe(pais => {
    //       console.log(pais)
    //     })
    //
    // })


    //FORMA 2
    this.activatedRoute
      .params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais[0] || null)


  }

}
