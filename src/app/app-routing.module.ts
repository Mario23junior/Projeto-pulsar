import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { PulsarListComponent } from './pulsar/pulsar-list/pulsar-list.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path:'pulsares',
        component:PulsarListComponent
      }
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
