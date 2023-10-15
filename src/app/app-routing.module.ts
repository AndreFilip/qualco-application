import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "task1", pathMatch: "full"},
  { path: 'task1', loadChildren: () => import('./task-one/task-one.module').then(m => m.TaskOneModule) }, 
  { path: 'task2', loadChildren: () => import('./task-two/task-two.module').then(m => m.TaskTwoModule) }, 
  { path: 'task3', loadChildren: () => import('./task-three/task-three.module').then(m => m.TaskThreeModule) },
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
