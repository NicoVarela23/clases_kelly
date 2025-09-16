import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: './form-example.html',
  styleUrl: './form-example.css'
})
export class FormExample {
  form !: FormGroup;
  private formBuilder = inject(FormBuilder);

  private biuldForm(){
    const nameRgx = /^(([a-zA-ZÀ-ÖØ-öø-ÿ]{3,60})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]*))$/;
    const mailRgx = /\w+@\w+\.+[a-z]/;
    this.form = this.formBuilder.group({
      name: ['',[Validators.required, Validators.pattern(nameRgx)]],
      mail: [
        '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]
    ]
    });
  }
  /**Clean code */
  get mailField(){
    return this.form.get('mail');
  }
  get nameField(){
    return this.form.get('name');
  }
  public keep(e:Event):void{
    e.preventDefault;
    console.log(e.target);
    if(this.form.valid){
      const data = this.form.value;
      console.log(data);
    }
  }
}
