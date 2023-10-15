import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryStatService {

  private readonly baseUrl = "http://localhost:8080/country-stats";

  constructor(private http: HttpClient) { }

  getAllCountryStats() {
    return this.http.get(this.baseUrl);
  }
}
