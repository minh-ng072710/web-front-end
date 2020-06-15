import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { DetailComponent } from './Components/Pages/detail/detail.component';
import { CategoryComponent } from './Components/Pages/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { MainloginComponent } from './Components/mainlogin/mainlogin.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IndexComponent } from './Components/index/index.component';

const routesConfig: Routes = [
  {
    path: 'cate',
    component: IndexComponent,
    children: [
      {
        path: 'dashboard',
        component: CategoryComponent
      },
    ]
  },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: MainloginComponent },

  { path: "**", component: MainloginComponent }

];

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    RouterModule.forRoot(routesConfig),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
