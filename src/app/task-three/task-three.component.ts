import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountryStatService } from '../services/country-stat.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter, findIndex, includes, orderBy } from 'lodash';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.scss']
})
export class TaskThreeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['name_continent', 'name_region', 'name_country', 'year', 'population', 'gdp'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  regionFilterOptions: any;
  countryFilterOptions: any;
  fromFilterOptions: any;
  toFilterOptions: any;
  allData: any;
  regionFilter: any;
  countryFilter: any;
  yearFromFilter: any;
  yearToFilter: any;

  constructor(private countryStatService: CountryStatService) {}

  ngOnInit(): void {
    this.countryStatService.getAllCountryStats().subscribe(data => {
      this.allData = data as any;
      this.dataSource.data = this.allData as any;

      this.regionFilterOptions = [];
      this.countryFilterOptions = [];
      this.fromFilterOptions = [];
      this.toFilterOptions = [];
      this.dataSource.data.forEach(countryStat => {
        if (countryStat.country?.region?.name && findIndex(this.regionFilterOptions, (rf: any) => rf.value == countryStat.country.region.id) == -1 ) {
          this.regionFilterOptions.push({name: countryStat.country.region.name, value: countryStat.country.region.id})
        }

        if (countryStat.country?.name && findIndex(this.countryFilterOptions, (rf: any) => rf.value == countryStat.country.id) == -1 ) {
          this.countryFilterOptions.push({name: countryStat.country.name, value: countryStat.country.id})
        }

        if (countryStat.id?.year) {
          if (findIndex(this.fromFilterOptions, (rf: any) => rf.value == countryStat.id.year) == -1 ) {
            this.fromFilterOptions.push({name: countryStat.id.year, value: countryStat.id.year})
          }

          if (findIndex(this.toFilterOptions, (rf: any) => rf.value == countryStat.id.year) == -1 ) {
            this.toFilterOptions.push({name: countryStat.id.year, value: countryStat.id.year})
          }
        }
      });

      this.regionFilterOptions = orderBy(this.regionFilterOptions, ['name']);
      this.countryFilterOptions = orderBy(this.countryFilterOptions, ['name']);
      this.fromFilterOptions = orderBy(this.fromFilterOptions, ['value']);
      this.toFilterOptions = orderBy(this.toFilterOptions, ['value']);
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onRegionSelectionChange(event:any) {
    this.regionFilter = event.value;
    this.filterData();
  }

  onCountrySelectionChange(event:any) {
    this.countryFilter = event.value;
    this.filterData();
  }
  
  onYearFromSelectionChange(event:any) {
    this.yearFromFilter = event.value;
    this.filterData();
  }
  
  onYearToSelectionChange(event:any) {
    this.yearToFilter = event.value;
    this.filterData();
  }
  
  filterData() {
    if (this.regionFilter) {
      this.dataSource.data = filter(this.allData, countryStat => countryStat.country.region.id == this.regionFilter);
    }
    if (this.countryFilter) {
      this.dataSource.data = filter(this.dataSource.data, countryStat => countryStat.country.id == this.countryFilter);
    }
    if (this.yearFromFilter) {
      this.dataSource.data = filter(this.dataSource.data, countryStat => countryStat.id.year >= this.yearFromFilter);
    }
    if (this.yearToFilter) {
      this.dataSource.data = filter(this.dataSource.data, countryStat => countryStat.id.year <= this.yearToFilter);
    }
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }
    
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name_continent':
          return this.compare(a.country.region.continent.name, b.country.region.continent.name, isAsc);
        case 'name_region':
          return this.compare(a.country.region.name, b.country.region.name, isAsc);
        case 'name_country':
          return this.compare(a.country.name, b.country.name, isAsc)
        case 'year':
          return this.compare(a.id.year, b.id.year , isAsc)
        case 'population':
          return this.compare(a.population, b.population , isAsc)
        case 'gdp':
          return this.compare(a.gdp, b.gdp, isAsc)
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
}
