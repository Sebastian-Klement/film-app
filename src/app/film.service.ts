import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Charakter } from './models/charakter.model';
import { Film } from './models/film.model';
import { Planet } from './models/planet.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  filmUrl: string = 'https://swapi.dev/api/films/';
  charakterUrl: string = 'https://swapi.dev/api/people/';
  planetUrl: string = 'https://swapi.dev/api/planets/';
  res: any;

  constructor(private httpClient: HttpClient) {}

  /** GET movies from the server */
  getFilms(): Observable<Film[]> {
    return this.httpClient
      .get<any>(this.filmUrl)
      .pipe(map((result) => result['results']));
  }
  /** GET charaktere from the server */
  getCharaktere(): Observable<Charakter[]> {
    return this.httpClient
      .get<any>(this.charakterUrl)
      .pipe(map((result) => result['results']));
  }

  /** GET planets from the server */
  getPlanets(): Observable<Planet[]> {
    return this.httpClient
      .get<any>(this.planetUrl)
      .pipe(map((result) => result['results']));
  }

  getPlanetById(id: number): Observable<Planet> {
    const url = `${this.planetUrl}/${id}`;
    return this.httpClient.get<Planet>(url);
  }

  getPlanetByUrl(url: string): Observable<Planet> {
    return this.httpClient.get<Planet>(url);
  }

  getCharakterByUrl(url: string): Observable<Charakter> {
    return this.httpClient.get<Charakter>(url);
  }

  /** GET movie by id. Will 404 if id not found */
  getFilmById(id: number): Observable<Film> {
    const url = `${this.filmUrl}/${id}`;
    return this.httpClient.get<Film>(url);
  }

  /** GET charakter by id. Will 404 if id not found */
  getCharakterById(id: number): Observable<Charakter> {
    const url = `${this.charakterUrl}/${id}`;
    return this.httpClient.get<Charakter>(url);
  }

  // searchCharakter(term: string): Observable<Charakter> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of();
  //   }
  //   return this.httpClient.get<Charakter>(
  //     `${this.charakterUrl}/?url=${term}`
  //   );
  // }

  /* GET movies whose name contains search term */
  searchMovies(term: string): Observable<Film[]> {
    if (!term.trim()) {
      // if not search term, return empty movie array.
      return of([]);
    }
    return this.httpClient
      .get<Film[]>(`${this.filmUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? console.log(`found movies matching "${term}"`)
            : console.log(`no movies matching "${term}"`)
        )
      );
  }

  /** POST: add a new movie to the server */
  addFilm(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(this.filmUrl, film);
  }

  /** PUT: update the hero on the server */
  updateFilm(film: Film): Observable<any> {
    return this.httpClient.put(this.filmUrl, film);
  }
}
