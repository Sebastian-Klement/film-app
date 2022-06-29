import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeaderComponent } from './header/header.component';
import { FilmService } from './film.service';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmListComponent } from './film-list/film-list.component';
import { CharaktereListComponent } from './charaktere-list/charaktere-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilmCreateComponent,
    FilmListComponent,
    CharaktereListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  exports: [],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
