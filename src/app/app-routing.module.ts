import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CharaktereCreateComponent } from './charaktere-create/charaktere-create.component';
import { CharaktereListComponent } from './charaktere-list/charaktere-list.component';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmListComponent,
  },
  {
    path: 'filmdetail/:episode_id',
    component: FilmDetailComponent,
  },
  {
    path: 'create',
    component: FilmCreateComponent,
  },
  {
    path: 'edit/:episode_id',
    component: FilmCreateComponent,
  },
  {
    path: 'charaktere',
    component: CharaktereListComponent,
  },
  {
    path: 'charakterecreate',
    component: CharaktereCreateComponent,
  },
  {
    path: 'charakteredit/:id',
    component: CharaktereCreateComponent,
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
