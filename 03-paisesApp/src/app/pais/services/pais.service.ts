import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pais} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com'

  private v3: string = 'v3.1'
  private v2: string = 'v2'

  constructor(private http: HttpClient) {
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/${this.v3}/name/${termino}`

    return this.http.get<Pais[]>(url)
  }

  buscarPaisPorCapital(termino: string): Observable<Pais[]> {
    const url = `${this.apiUrl}/${this.v3}/capital/${termino}`

    return this.http.get<Pais[]>(url)
  }


  getPaisPorCodigo(id: string): Observable<Pais> {
    const url = `${this.apiUrl}/${this.v3}/alpha/${id}`

    return this.http.get<Pais>(url)
  }


}
