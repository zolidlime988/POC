import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeV1Component } from './home-v1/home-v1.component';
import { TestDefaultComponentComponent } from './test-default-component/test-default-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomeV1Component,
    children: [
      {
        path: 'service1',
        loadChildren: () => import('./home-one-module/home-one-module.module').then(m => m.HomeOneModuleModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
