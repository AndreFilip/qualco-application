import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskTwoRoutingModule } from './task-two-routing.module';
import { TaskTwoComponent } from './task-two.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    TaskTwoComponent
  ],
  imports: [
    CommonModule,
    TaskTwoRoutingModule,
    MatTableModule
  ]
})
export class TaskTwoModule { }
