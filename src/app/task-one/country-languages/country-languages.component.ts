import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryLanguageService } from 'src/app/services/country-language.service';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.scss']
})
export class CountryLanguagesComponent implements OnInit {

  countryLanguages: any;

  constructor(private countryLanguageService: CountryLanguageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const countryId = this.route.snapshot.paramMap.get("countryId");
    this.getAllCountriesLanguages(countryId);
  }

  getAllCountriesLanguages(countryId: any) {
    this.countryLanguageService.getAllCountriesLanguages(countryId).subscribe(data => {
      this.countryLanguages = data;
    })
  }
}
