import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>
  private _color: string = 'red'
  private _mensaje: string = 'Este campo es requerido'

  @Input() set color(valor: string) {
    this._color = valor
    this.setColor()
  }

  // @Input() mensaje: string = 'Este campo es requerido'
  @Input() set mensaje(valor: string) {
    this._mensaje = valor
    this.setMensaje()
  }

  @Input() set valido(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.remove('d-none')
    } else {
      this.htmlElement.nativeElement.classList.add('d-none')
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el
  }

  ngOnInit(): void {
    this.setColor()
    this.setMensaje()
    this.setEstilo()
  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

  ngOnChanges(changes: SimpleChanges): void {

    // if (changes['mensaje']) {
    //   this.htmlElement.nativeElement.innerText = changes['mensaje'].currentValue
    // }
    //
    // if (changes['color']) {
    //   this.htmlElement.nativeElement.style.color = changes['color'].currentValue
    // }

  }

}
