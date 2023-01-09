import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordFormatValidatorService {

  constructor() { }

  public passwordFormatValidator = (password: AbstractControl): ValidatorFn => {
    return (): { [key: string]: boolean } | null => {
      const confirmValue: string = password.value;
      if (!this.containsNumbers(confirmValue) || !this.containsLowercaseLetters(confirmValue) || !this.containsUppercaseLetters(confirmValue)) {
        return { format: true}
      }
      return null;
    }
  }

  private containsNumbers(str): boolean {
    return /[0-9]/.test(str);
  }

  private containsLowercaseLetters(str): boolean {
    return /[a-z]/.test(str);
  }

  private containsUppercaseLetters(str): boolean {
    return /[A-Z]/.test(str);
  }
}
