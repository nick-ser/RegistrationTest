import { Injectable } from '@angular/core';
import { UserForRegistrationDto } from './../Models/userForRegistrationDto.model';
import { RegistrationResponseDto } from './../Models/registrationResponseDto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl: string = 'https://localhost:7282';

  constructor(private http: HttpClient) { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(this.createCompleteRoute(this.baseUrl, route), body);
  }

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
  }
}
