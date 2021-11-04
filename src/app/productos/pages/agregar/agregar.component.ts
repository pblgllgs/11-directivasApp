import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  public color :string = 'green';
  public texto1 : string = 'pablo gallegos';

  miFormulario: FormGroup = this.fb.group({
    nombre : ['',[Validators.required,Validators.minLength(4)]]
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError( campo: string ): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre(){
    this.texto1 = Math.random().toString();
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }


}
