import { Component, signal } from '@angular/core';
import {Header} from './header/header';
import {Footer} from './footer/footer';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title:string = 'Formas de enlazar datos.';
  private data:string="Esto es una interpolacion.";
  public edad:number=18;
  protected nombre:string="Holman";

  //Metodo de acceso
  public getData():string{
    return this.data;
  }

  public getEdad():number{
    return this.edad;
  }

  public getNombre():string{
    return this.nombre;
  }

  //Metodo de orden
  public getEvento():void{
    alert("Soy Click.");

  }
}
