import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
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
    species: [],
    created: '',
    edited: '',
    url: '',
  };

  constructor(
    private route: ActivatedRoute,
    private movieService: FilmService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('episode_id')!, 10);
    this.movieService.getMovie(id).subscribe((movie) => (this.film = this.film));
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.film) {
      this.movieService.updateMovie(this.film).subscribe(() => this.goBack());
    }
  }
}
