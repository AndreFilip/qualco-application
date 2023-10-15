import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss']
})
export class TaskTwoComponent implements OnInit {

  displayedColumns: string[] = ['name', 'country_code3', 'year', 'population', 'gdp'];
  dataSource: any;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getAllWithCountryStats().subscribe(data => {
      this.dataSource = data
    });
  }

}
