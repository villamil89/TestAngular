import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../objetos/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {

  @Input() user: User;
  userForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.userForm = this._formBuilder.group({
      user: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), this.validatePassword]),
      first_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')]),
      last_name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.user.currentValue) {
      let user: User = changes.user.currentValue;
      this.userForm.controls['user'].setValue(user.user);
      this.userForm.controls['password'].setValue(user.password);
      this.userForm.controls['first_name'].setValue(user.first_name);
      this.userForm.controls['last_name'].setValue(user.last_name);
      this.userForm.controls['email'].setValue(user.email);
    }
  }

  onSubmit() {
    const user = this.userForm.value;
    this.userForm.reset();
  }

  private validatePassword(control: AbstractControl) {
    let error = {};
    if (control.value.length <= 4)
      error = { ...error, Logitud: 'La contraseña debe tener al menos 5 caracteres' };
    return error;
  }

  handlerError(controlName: string): string {
    const control = this.userForm.get(controlName);
    if (control.touched && control.errors)
      return JSON.stringify(control.errors);
    return "";
  }

}
