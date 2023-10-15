import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskOneRoutingModule } from './task-one-routing.module';
import { TaskOneComponent } from './task-one.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';


@NgModule({
  declarations: [
    TaskOneComponent,
    CountryLanguagesComponent
  ],
  imports: [
    CommonModule,
    TaskOneRoutingModule
  ]
})
export class TaskOneModule { }
