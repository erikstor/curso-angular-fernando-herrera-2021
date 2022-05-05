import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AuthInterface, Usuario} from "../interfaces/auth-interface";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseURL: string = environment.baseURL
  private _usuario!: Usuario

  constructor(private http: HttpClient) {
  }

  get usuario() {
    return {...this._usuario}
  }

  login(email: string, password: string) {
    return this.http.post<AuthInterface>(
      `${this.baseURL}/auth`,
      {
        email,
        password
      }).pipe(
      tap(resp => {
        if (resp.ok) {

          localStorage.setItem('token', resp.token)

          this._usuario = {
            name: resp.name,
            uuid: resp.uuid,
            email: resp.email,
          }
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    )
  }

  validarToken(): Observable<boolean> {
    const headers = new HttpHeaders({'x-token': localStorage.getItem('token') || ''})

    return this.http.get<AuthInterface>(`${this.baseURL}/auth/renew`, {
        headers
      }
    ).pipe(
      map(resp => {

        localStorage.setItem('token', resp.token)

        this._usuario = {
          name: resp.name,
          uuid: resp.uuid,
          email: resp.email,
        }

        return resp.ok
      }),
      catchError(err => of(false))
    )
  }

  logout() {
    localStorage.clear()
  }

  newUser(
    name: string,
    email: string,
    password: string
  ) {
    return this.http.post<AuthInterface>(
      `${this.baseURL}/auth/new`,
      {
        name,
        email,
        password
      }).pipe(
      tap(resp => {
        if (resp.ok) {

          localStorage.setItem('token', resp.token)

          this._usuario = {
            name: resp.name,
            uuid: resp.uuid,
            email: resp.email,
          }

        }
      }),
      map(resp => resp.ok),
      catchError(err => of(err.error.msg))
    )
  }

}
