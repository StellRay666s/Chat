import {FormGroup} from '@angular/forms';

export abstract class AuthForm<T> {
  formSubmitted = false

  abstract getForm(): FormGroup

  isInvalid(name: string) {
    const control = this.getForm().get(name)
    return control?.invalid && (control.touched || this.formSubmitted)
  }

}
