import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordConfirmationValidatorService } from './../../Validators/password-confirmation-validator.service';
import { IsAgreeSetValidatorService } from './../../Validators/is-agree-set-validator.service';
import { PasswordFormatValidatorService } from './../../Validators/password-format-validator.service';
import { UserStoreService } from './../../Services/user-store.service';
import { UserForRegistrationDto } from '../../Models/userForRegistrationDto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl(''),
    isAgree: new FormControl('')
  });

  constructor(private passConfValidator: PasswordConfirmationValidatorService,
    private isAgreeSetValidator: IsAgreeSetValidatorService,
    private passwordFormatValidator: PasswordFormatValidatorService,
    private userStoreService: UserStoreService,
    private router: Router) { }

  ngOnInit(): void {
    this.registerForm.get('confirm').setValidators([Validators.required,
      this.passConfValidator.validateConfirmPassword(this.registerForm.get('password'))]);

    this.registerForm.get('isAgree').setValidators([Validators.required,
      this.isAgreeSetValidator.isAgreeSetValidatorService(this.registerForm.get('isAgree'))]);

    this.registerForm.get('password').setValidators([Validators.required,
      this.passwordFormatValidator.passwordFormatValidator(this.registerForm.get('password'))]);
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName).invalid && this.registerForm.get(controlName).touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName).hasError(errorName)
  }

  validateForm() {
    if (this.registerForm.invalid) {
      this.registerForm.get('email').markAsTouched();
      this.registerForm.get('password').markAsTouched();
      this.registerForm.get('confirm').markAsTouched();
      this.registerForm.get('isAgree').markAsTouched();
      return;
    } else {
      this.next(this.registerForm);
    }
  }

  public next = (registerFormValue) => {
    const formValues = { ...registerFormValue };

    const user: UserForRegistrationDto = {
      countryId: '',
      provinceId: '',
      email: formValues.value.email,
      password: formValues.value.password,
      confirmPassword: formValues.value.confirm,
      isAgree: formValues.value.isAgree
    };

    this.userStoreService.setUser(user);
    this.router.navigate(['register-step2']);
  }
}
