import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly baseUrl = "http://localhost:8080/country";

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.baseUrl);
  }

  getAllWithCountryStats() {
    return this.http.get(this.baseUrl + "/findAllWithCountryStats");
  }
}
