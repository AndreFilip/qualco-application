import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryLanguageService {

  private readonly baseUrl = "http://localhost:8080/country-language";

  constructor(private http: HttpClient) { }

  getAllCountriesLanguages(countryId: any) {
    return this.http.get(this.baseUrl + "/" + countryId);
  }
}
