import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pais, PaisSmall} from "../interfaces/paises.interface";
import {combineLatest, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {

  private _baseURL: string = 'https://restcountries.com/v2'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  get regiones(): string[] {
    return [...this._regiones]
  }

  constructor(private _http: HttpClient) {
  }

  getPaisesPerRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this._baseURL}/region/${region}?fields=alpha3Code,name`
    return this._http.get<PaisSmall[]>(url)
  }

  getPaisesPerAlphacode(codigo: string): Observable<Pais | null> {

    if (!codigo) {
      return of(null)
    }

    const url: string = `${this._baseURL}/alpha/${codigo}`
    return this._http.get<Pais>(url)
  }

  getPaisesPerAlphacodeSmall(codigo: string): Observable<PaisSmall> {
    const url: string = `${this._baseURL}/alpha/${codigo}?fields=name,alpha3Code`
    return this._http.get<PaisSmall>(url)
  }

  getPaisesPerAlphacodes(borders: string[]): Observable<PaisSmall[]>{

    if(!borders){
      return of([])
    }

    const peticiones: Observable<PaisSmall>[] = []

    borders.forEach((codigo) => {
      const peticion = this.getPaisesPerAlphacodeSmall(codigo)
      peticiones.push(peticion)
    })

    return combineLatest(peticiones)
  }

}

