import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CharaktereDetailComponent } from './charaktere-detail/charaktere-detail.component';
import { CharaktereListComponent } from './charaktere-list/charaktere-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

import { HomeComponent } from './home/home.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

const routes: Routes = [
  {
    path: 'planeten',
    component: PlanetListComponent,
  },
  {
    path: 'films',
    component: FilmListComponent,
  },
  {
    path: 'filmdetail/:episode_id',
    component: FilmDetailComponent,
  },
  {
    path: 'charaktere',
    component: CharaktereListComponent,
  },
  {
    path: 'charakteredit/:id',
    component: CharaktereDetailComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
