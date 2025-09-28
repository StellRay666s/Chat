import { Component, inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {Button, ButtonDirective} from 'primeng/button';
import {Message} from 'primeng/message';
import {AuthForm} from '../services/authform.service';



type SignIn = {
   login:FormControl<string | null>,
   password:FormControl<string | null>
}


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone:true,
  imports: [InputTextModule, ReactiveFormsModule, ButtonDirective, Message],
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent extends AuthForm<SignIn> {

  signInForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required])
  })

  override getForm(): FormGroup {
    return this.signInForm
  }


  submit():void{
    if(this.signInForm.valid){
      this.formSubmitted = false
    }
  }

}
