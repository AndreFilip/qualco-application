import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskThreeRoutingModule } from './task-three-routing.module';
import { TaskThreeComponent } from './task-three.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TaskThreeComponent
  ],
  imports: [
    CommonModule,
    TaskThreeRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule
  ]
})
export class TaskThreeModule { }
