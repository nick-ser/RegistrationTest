import { Injectable } from '@angular/core';
import { UserForRegistrationDto } from '../Models/userForRegistrationDto.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private user: UserForRegistrationDto = {
    countryId: '',
    provinceId: '',
    email: "",
    password: '',
    confirmPassword: '',
    isAgree: false
  }

  constructor() { }

  public getUser(): UserForRegistrationDto {
    return this.user;
  }

  public setUser(user: UserForRegistrationDto): void {
    this.user = user;
  }
}
