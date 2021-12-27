import {Component} from '@angular/core';

import {RegionInterface} from "../../interfaces/region.interface";
import {Pais} from "../../interfaces/pais.interface";

import {PaisService} from "../../services/pais.service";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: RegionInterface[] = [
    {
      code: 'EU',
      description: 'European Union'
    },
    {
      code: 'EFTA',
      description: 'European Free Trade Association'
    },
    {
      code: 'CARICOM',
      description: 'Caribbean Community'
    },
    {
      code: 'PA ',
      description: 'Pacific Alliance'
    },
    {
      code: 'AU ',
      description: 'African Union'
    },
    {
      code: 'USAN',
      description: 'Union of South American Nations'
    },
    {
      code: 'EEU',
      description: 'Eurasian Economic Union'
    },
    {
      code: 'AL',
      description: 'Arab League'
    },
    {
      code: 'ASEAN',
      description: 'Association of Southeast Asian Nations'
    },
    {
      code: 'CAIS ',
      description: 'Central American Integration System'
    },
    {
      code: 'CEFTA',
      description: 'Central European Free Trade Agreement'
    },
    {
      code: 'NAFTA',
      description: 'North American Free Trade Agreement'
    },
    {
      code: 'SAARC',
      description: 'South Asian Association for Regional Cooperation'
    }
  ]

  regionActiva: RegionInterface = {
    code: '',
    description: ''
  }

  paises: Pais[] = []

  constructor(private paisService: PaisService) {
  }

  activarRegion(region: RegionInterface) {

    if (this.regionActiva.code === region.code) {
      return
    }

    this.regionActiva = region

    this.paisService.getPaisPorRegion(region.code).subscribe(paises => this.paises = paises)
  }


  getClaseCss(region: string): string {
    return (region === this.regionActiva.code) ? 'mb-3 btn btn-primary' : 'mb-3 btn btn-outline-primary'
  }

}
