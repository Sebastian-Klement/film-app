import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from 'src/app/film.service';

import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  // characters = [
  //   'Ant-Man',
  //   'Aquaman',
  //   'Asterix',
  //   'The Atom',
  //   'The Avengers',
  //   'Batgirl',
  //   'Batman',
  //   'Batwoman',
  // ];

  constructor(
    private filmService: FilmService,
  ) {}
searchText:string="";

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (data) => {
        this.films = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log(this.films);
      },
    });
  }
}
