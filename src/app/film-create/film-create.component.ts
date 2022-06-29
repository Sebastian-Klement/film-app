import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-create',
  templateUrl: './film-create.component.html',
  styleUrls: ['./film-create.component.css'],
})
export class FilmCreateComponent implements OnInit {
  film: Film = {
    id: 0,
    title: '',
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    if (this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('episode_id'));
      this.filmService.getFilmById(id).subscribe((result) => {
        this.film = result;
      });
    }
  }

  save(): void {
    this.filmService.addFilm(this.film).subscribe();
    this.router.navigate(['films']);
  }
}
