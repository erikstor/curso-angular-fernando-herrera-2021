import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    name: ['erik', [Validators.required, Validators.minLength(3)]],
    email: ['test@test.com', [Validators.email, Validators.required]],
    password: ['1231213', [Validators.minLength(6), Validators.required]],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
  }

  guardar() {
    const {name, email, password} = this.miFormulario.value
    this.authService.newUser(name, email, password).subscribe(ok => {
      if (ok === true) {
        this.router.navigateByUrl('/dashboard')
      } else {
        Swal.fire('Error', ok, 'error')
      }
    })

  }

}
