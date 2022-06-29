import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from 'src/app/films/film.model';
import { FilmService } from 'src/app/films/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  film: Film = {
    id: 0,
    title: 'Titledummy',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    specie: [],
    created: '',
    edited: '',
    url: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('episode_id'));
    console.log(id);
    this.filmService
      .getFilmById(id)
      .subscribe((result) => (this.film = result));
    console.log(this.film.title);
  }

  // save(): void {
  //   if (this.film) {
  //     this.filmService.updateMovie(this.film).subscribe();
  //     this.router.navigate(['films']);
  //   }
  // }
}
