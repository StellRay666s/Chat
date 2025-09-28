import {Component} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {ButtonDirective} from 'primeng/button';
import {Message} from 'primeng/message';
import {InputText} from 'primeng/inputtext';
import {AuthForm} from '../services/authform.service';


type RegisterForm = {
  login: FormControl<string | null>,
  password: FormControl<string | null>,
  repeatPassword: FormControl<string | null>
}


const matchPasswordValidators: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value
  const passwordRepeat = control.get('repeatPassword')?.value
  control.get('repeatPassword')?.setErrors(password === passwordRepeat ? null : {repeatPassword: true})
  return password === passwordRepeat ? null : {repeatPassword: true}

}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonDirective,
    Message,
    InputText
  ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AuthForm<RegisterForm> {

  getForm(): FormGroup {
    return this.registerForm;
  }

  registerForm = new FormGroup<RegisterForm>({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl(''),
  }, {validators: matchPasswordValidators})


  submit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.getRawValue())
    }
  }


}



