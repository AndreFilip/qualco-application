import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent implements OnInit {

  countries: any;

  constructor(private countryService: CountryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = data;
    })
  }

  goTo(link: any) {
    this.router.navigate([link], {relativeTo: this.route});
  }

}
