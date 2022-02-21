import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: []
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    terms: [false, Validators.requiredTrue]
  })

  persona = {
    genero: "F",
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {
    this.myForm.reset({...this.persona, terms: true})

    this.myForm.valueChanges.subscribe(({terms, ...rest}) => {
      this.persona = rest
    })

    // this.myForm.get('terms')?.valueChanges.subscribe(form => {
    //   console.log(form)
    // })

  }


  guardar() {
    const formValue = {...this.myForm.value}

    console.log(formValue)
  }

}
