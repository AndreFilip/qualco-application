import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './task-one.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';

const routes: Routes = [
  { path: '', component: TaskOneComponent },
  { path: ':countryId', component: CountryLanguagesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskOneRoutingModule { }
