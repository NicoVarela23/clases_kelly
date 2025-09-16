import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-par-impar',
  imports: [],
  templateUrl: './par-impar.html',
  styleUrl: './par-impar.css'
})
export class ParImpar {

    mensaje:string;
    //recibir un valor
    @Input() valor: number;
    //mandar mensaje al componente padre
    @Output() parImpar = new EventEmitter<string>();

    constructor(){
      this.mensaje="";
      this.valor = -1;
    }

    calcularParImpar():void{
      this.mensaje = this.valor % 2 === 0 ? `La suma de las balotas es: ${this.valor}
       y es par` : `La suma de las balotas es: ${this.valor} y es impar`
       this.parImpar.emit(this.mensaje); 
    }
}
