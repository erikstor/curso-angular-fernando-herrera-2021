import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) {}

  get httpParams() {
    return new HttpParams();
  }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseURL}/heroes`);
  }

  findHeroe(id: string): Observable<Heroe> {
    // const params = this.httpParams.set('id', id);
    return this.http.get<Heroe>(`${this.baseURL}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(
      `${this.baseURL}/heroes?q=${termino}&_limit=5`
    );
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${this.baseURL}/heroes`, heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${this.baseURL}/heroes/${heroe.id}`, heroe);
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/heroes/${id}`);
  }


}
