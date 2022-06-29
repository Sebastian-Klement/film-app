import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/film.model';
import { FilmService } from 'src/app/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  films: Film[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getFilms().subscribe((result) => (this.films = result));
  }
}
