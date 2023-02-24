import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOneComponent } from './service-one/service-one.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ServiceOneComponent,
  }
]

@NgModule({
  declarations: [
    ServiceOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeOneModuleModule { }
