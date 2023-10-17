import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise100Component } from './exercise100/exercise100.component';
import { Exercise101Component } from './exercise101/exercise101.component';
import { Exercise102Component } from './exercise102/exercise102.component';
import { Exercise103Component } from './exercise103/exercise103.component';
import { Exercise104Component } from './exercise104/exercise104.component';
import { Exercise105Component } from './exercise105/exercise105.component';
import { Exercise106Component } from './exercise106/exercise106.component';
import { Exercise107Component } from './exercise107/exercise107.component';

const routes: Routes = [
  {
    path: 'exercise-100',
    component: Exercise100Component,
  },
  {
    path: 'exercise-101',
    component: Exercise101Component,
  },
  {
    path: 'exercise-102',
    component: Exercise102Component,
  },
  {
    path: 'exercise-103',
    component: Exercise103Component,
  },
  {
    path: 'exercise-104',
    component: Exercise104Component,
  },
  {
    path: 'exercise-105',
    component: Exercise105Component,
  },
  {
    path: 'exercise-106',
    component: Exercise106Component,
  },
  {
    path: 'exercise-107',
    component: Exercise107Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
