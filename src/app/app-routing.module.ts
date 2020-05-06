import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { HomeComponent } from './Components/Pages/home/home.component';
import { DetailComponent } from './Components/Pages/detail/detail.component';
import { CategoryComponent } from './Components/Pages/category/category.component';
import { LoginComponent } from './Components/login/login.component';

const routesConfig: Routes = [
  { path: 'cate', component: CategoryComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    HomeComponent,
    // LoginComponent,
    CategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routesConfig),
    CommonModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
