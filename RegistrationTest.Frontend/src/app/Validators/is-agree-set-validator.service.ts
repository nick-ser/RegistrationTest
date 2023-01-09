import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IsAgreeSetValidatorService {

  constructor() { }

  public isAgreeSetValidatorService = (checkbox: AbstractControl): ValidatorFn => {
    return (): { [key: string]: boolean } | null => {
      const confirmValue = checkbox.value;
      if (confirmValue === false) {
        return { required: true }
      }
      return null;
    }
  }
}
