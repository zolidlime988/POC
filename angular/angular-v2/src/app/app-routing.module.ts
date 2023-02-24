import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultPageComponent } from './default-page/default-page.component';
import { V1PageComponent } from './v1-page/v1-page.component';

const routes: Routes = [
  {
    path: '',
    component: V1PageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      }
    ]
  },
  {
    path: '**',
    component: DefaultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
