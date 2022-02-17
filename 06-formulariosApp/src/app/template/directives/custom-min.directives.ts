import {Directive, Input} from "@angular/core";
import {FormControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirectives,
      multi: true
    }
  ]
})
export class CustomMinDirectives implements Validator {

  @Input() minimo!: number;

  constructor() {
  }

  validate(control: FormControl) {
    const inputValue = control.value
    console.log(inputValue)
    console.log('minimo', this.minimo)
    return inputValue < this.minimo ? {'customMin': true} : null
  }

}
