import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color :string = 'red';
  private _mensaje:string =  'Este campo es requerido';
  private _valido:boolean = false;

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string){
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(noTieneError:boolean){
    if(noTieneError === true){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
      this.htmlElement.nativeElement.classList.add('animate__animated');
      this.htmlElement.nativeElement.classList.add('animate__fadeIn');
    }
  }

  constructor(private el:ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }

  ngOnInit(): void {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this._color;
    
  }

  setMensaje():void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
