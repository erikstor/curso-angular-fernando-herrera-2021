import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Pais} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com'

  private v3: string = 'v3.1'
  private v2: string = 'v2'

  get httpParams () {
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  }

  constructor(private http: HttpClient) {
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/${this.v3}/name/${termino}`

    return this.http.get<Pais[]>(url, {params: this.httpParams})
  }

  buscarPaisPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/${this.v3}/capital/${termino}`

    return this.http.get<Pais[]>(url, {params: this.httpParams})
  }


  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/${this.v3}/alpha/${id}`

    return this.http.get<Pais>(url)
  }


  getPaisPorRegion(region: string): Observable<Pais[]> {

    const url = `${this.apiUrl}/${this.v2}/regionalbloc/${region}`

    return this.http.get<Pais[]>(url, {params: this.httpParams})
      .pipe(
        tap(console.log)
      )
  }


}
