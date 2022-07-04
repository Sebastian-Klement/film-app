import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '../film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css'],
})
export class FilmDetailComponent implements OnInit {
  film: Film = {
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
    var id = Number(this.activatedRoute.snapshot.paramMap.get('episode_id'));
    this.filmService.getFilmById(id).subscribe((result) => {
      this.film = result;
    });
  }
}
