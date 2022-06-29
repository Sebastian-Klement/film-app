import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { FilmsComponent } from './films.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmService } from './film.service';
import { FilmCreateComponent } from './film-create/film-create.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent,
    children: [
      {
        path: '',
        component: FilmListComponent,
      },
      {
        path: 'filmcreate',
        component: FilmCreateComponent,
      },
      {
        path: 'filmdetails/:episode_id',
        component: FilmDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    FilmsComponent,
    FilmListComponent,
    FilmDetailComponent,
    FilmCreateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule, FilmsComponent],
  providers: [FilmService],
})
export class FilmsModule {}
