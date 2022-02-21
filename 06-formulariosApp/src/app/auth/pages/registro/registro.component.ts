import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validator/validator.service";
import {EmailValidatorService} from "../../../shared/validator/email-validator.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.validatorService.emailPattern)
        ],
        [
          this.validatorEmailService
        ]
      ],
      username: [
        '',
        [
          Validators.required,
          this.validatorService.noPuedeSerStrider
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      password2: [
        '',
        [
          Validators.required,
        ]
      ],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2')
      ]
    }
  )

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors

    switch (errors) {
      case errors && errors['required']:
        return 'El email es obligatorio';
      case errors && errors['pattern']:
        return 'El valor ingresado no tiene formato de correo';
      case errors && errors['emailTomado']:
        return 'El correo electronico ya fue tomado';
      default:
        return ''
    }

  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private validatorEmailService: EmailValidatorService
  ) {
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Example Name',
      email: 'test1@test.com',
      username: 'erikstor',
      password: '1234567',
      password2: '1234567',
    })
  }


  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }


  // emailRequired() {
  //   let error = this.miFormulario.get('email')?.errors
  //
  //   if (error && error['required']) {
  //     error = error['required']
  //   }
  //
  //   return error && this.miFormulario.get('email')?.touched
  // }
  //
  // emailFormato() {
  //
  //   let error = this.miFormulario.get('email')?.errors
  //
  //   if (error && error['pattern']) {
  //     error = error['pattern']
  //   }
  //
  //   return error && this.miFormulario.get('email')?.touched
  // }
  //
  // emailTomado() {
  //
  //   let error = this.miFormulario.get('email')?.errors
  //
  //   if (error && error['emailTomado']) {
  //     error = error['emailTomado']
  //   }
  //
  //   return error && this.miFormulario.get('email')?.touched
  // }

  submitForm() {
    this.miFormulario.markAllAsTouched()
  }

}
