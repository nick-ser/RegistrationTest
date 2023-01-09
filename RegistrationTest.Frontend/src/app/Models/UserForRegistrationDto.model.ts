export interface UserForRegistrationDto {
  countryId: string;
  provinceId: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
}
