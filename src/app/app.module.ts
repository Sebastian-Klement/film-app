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
import { FilmListComponent } from './film-list/film-list.component';
import { CharaktereListComponent } from './charaktere-list/charaktere-list.component';
import { CharaktereDetailComponent } from './charaktere-detail/charaktere-detail.component';
import { ConvertToNumberPipe } from './pipes/convert-to-number.pipe';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { ConvertToRomanNumbersPipe } from './pipes/convert-to-roman-numbers.pipe';
import { PlanetListComponent } from './planet-list/planet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilmListComponent,
    CharaktereListComponent,
    CharaktereDetailComponent,
    ConvertToNumberPipe,
    FilmDetailComponent,
    ConvertToRomanNumbersPipe,
    PlanetListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // TODO HttpClient ist für InMemory. Alle Req müssen umgebaut werden
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    // }),
  ],
  exports: [],
  providers: [FilmService],
  bootstrap: [AppComponent],
})
export class AppModule {}
