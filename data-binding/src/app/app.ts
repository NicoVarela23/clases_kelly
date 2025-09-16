import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    FormsModule,
    Footer,
    Header

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected tittle:string = "formas de enlazar datos";
  private data:string = "esto es una interpolación";
  public edad:number = 18;
  protected nombre:string="Holtman"
 
  //Metodo de acceso
  public getData():string{
    return this.data; //this data se usa para acceder a los atributos de la clase
  }
 
  //metodo de orden
  public getEvento():void{ //void no retorna nada
    alert("Soy click");
  }
}
 