import { Component, OnInit } from '@angular/core';
import { UserForRegistrationDto } from '../../Models/userForRegistrationDto.model';
import { UserStoreService } from './../../Services/user-store.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../../Services/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TerritoryService } from '../../Services/territory.service';
import { CountryRequestDto } from '../../Models/CountryRequestDto.model';
import { ProvinceRequestDto } from '../../Models/ProvinceRequestDto.model';

@Component({
  selector: 'app-register-user-step2',
  templateUrl: './register-user-step2.component.html',
  styleUrls: ['./register-user-step2.component.css']
})
export class RegisterUserStep2Component implements OnInit {
  isSubmitted = false;

  allCountries: CountryRequestDto[] = [];
  provinces: ProvinceRequestDto[] = [];

  registerForm: FormGroup = new FormGroup({
    country: new FormControl('', [Validators.required]),
    province: new FormControl('', [Validators.required])
  });

  private user: UserForRegistrationDto = {
    countryId: '',
    provinceId: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAgree: false
  };
  
  constructor(private userStoreService: UserStoreService, private regService: RegistrationService,
    private territoryService: TerritoryService) { }
  
  ngOnInit(): void {
    this.user = this.userStoreService.getUser();
    this.territoryService.getAllCounties().subscribe({
      next: (countries) => {
        this.allCountries = countries;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  onChange($event) {
    if (this.registerForm.get('country').value != undefined) {
      this.territoryService.getProvincesByCountryId(this.registerForm.get('country').value.id).subscribe({
        next: (provinces) => {
          this.provinces = provinces;
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }

  get countries() {
    return this.registerForm.get('country');
  }

  get selectedProvince() {
    return this.registerForm.get('province');
  }

  public registerUser = (registerFormValue) => {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    const formValues = { ...registerFormValue };
    this.user.countryId = formValues.country.id;
    this.user.provinceId = formValues.province.id;
    this.regService.registerUser("api/registration", this.user)
      .subscribe({
        next: (_) => console.log("Successful registration"),
        error: (err: HttpErrorResponse) => console.log(err.error.errors)
      });
  }
}
