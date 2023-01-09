import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryRequestDto } from '../Models/CountryRequestDto.model';

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  baseUrl: string = 'https://localhost:7282';

  constructor(private http: HttpClient) { }

  public getAllCounties = () => {
    return this.http.get<CountryRequestDto[]>(this.createCompleteRoute(this.baseUrl, 'api/territory/countries'));
  }

  public getProvincesByCountryId = (id: string) => {
    return this.http.get<CountryRequestDto[]>(this.createCompleteRoute(this.baseUrl, 'api/territory/provinces/') + id);
  }

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
  }
}
