import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Charakter } from './charakter.model';
import { Film } from './film.model';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  filmUrl: string = '/api/films';
  charakterUrl: string = '/api/charaktere';
  response: any;

  constructor(private httpClient: HttpClient) {}

  /** GET movies from the server */
  getFilms(): Observable<Film[]> {
    return (this.response = this.httpClient.get<Film[]>(this.filmUrl));
  }
  /** GET charaktere from the server */
  getCharaktere(): Observable<Charakter[]> {
    return (this.response = this.httpClient.get<Charakter[]>(
      this.charakterUrl
    ));
  }

  /** GET movie by id. Will 404 if id not found */
  getFilmById(id: number): Observable<Film> {
    return (this.response = this.httpClient.get<Film>(this.filmUrl + '/' + id));
  }

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
    return (this.response = this.httpClient.post<Film>(this.filmUrl, film));
  }

  /** PUT: update the hero on the server */
  updateFilm(film: Film): Observable<any> {
    return this.httpClient.put(this.filmUrl, film);
  }
}
