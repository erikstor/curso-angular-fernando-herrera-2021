import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {Observable, map, delay,} from "rxjs";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  private baseURL: string = environment.baseURL;

  constructor(private http: HttpClient) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value

    return this.http.get<any[]>(`${this.baseURL}/usuarios?q=${email}`)
      .pipe(
        delay(3000),
        map(resp => {


            if (resp.length > 0) {
              return {emailTomado: true}
            }

            control.setErrors(null)

            return null
          }
        )
      )

  }

}
