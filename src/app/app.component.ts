import { Component, OnInit } from '@angular/core';
import { CountryService } from './services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'qualco-application';

  links = [
    {name: "Task 1", url: "task1"},
    {name: "Task 2", url: "task2"},
    {name: "Task 3", url: "task3"},
  ];
  activeLink: any;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.activeLink = this.links[0];
  }

  goTo(link: any) {
    this.activeLink = link;
    this.router.navigate([link.url]);
    // this.router.navigate(['items'], { relativeTo: this.route });
    // this.router.navigate(['/heroes', { id: heroId }]);   const heroId = this.route.snapshot.paramMap.get('id');
  }
}
