import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormExample } from './form-example/form-example';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormExample,ReactiveFormsModule, FormBuilder, Validators, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('react-form');
}
