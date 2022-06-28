import { Injectable } from '@angular/core';
import { Film } from './film';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private filmUrl = '/api/films';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  /** GET movies from the server */
  getMovies(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.filmUrl).pipe(
      tap((_) => console.log('fetched movies')),
      catchError(this.handleError<Film[]>('getMovies', []))
    );
  }

  /** GET movie by id. Will 404 if id not found */
  getMovie(id: number): Observable<Film> {
    const url = this.filmUrl + '/' + id;
    return this.httpClient.get<Film>(url).pipe(
      tap((_) => console.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Film>(`getMovie id=${id}`))
    );
  }

  /* GET movies whose name contains search term */
  searchMovies(term: string): Observable<Film[]> {
    if (!term.trim()) {
      // if not search term, return empty movie array.
      return of([]);
    }
    return this.httpClient.get<Film[]>(`${this.filmUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? console.log(`found movies matching "${term}"`)
          : console.log(`no movies matching "${term}"`)
      ),
      catchError(this.handleError<Film[]>('searchMovies', []))
    );
  }

  /**  Save methods*/

  /** POST: add a new movie to the server */
  addMovie(film: Film): Observable<Film> {
    return this.httpClient.post<Film>(this.filmUrl, film).pipe(
      tap((newMovie: Film) =>
        console.log(`added movie w/ id=${newMovie.episode_id}`)
      ),
      catchError(this.handleError<Film>('addmovie'))
    );
  }
  /** DELETE: delete the movie from the server */
  deleteMovie(id: number): Observable<Film> {
    const url = `${this.filmUrl}/${id}`;

    return this.httpClient.delete<Film>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted movie id=${id}`)),
      catchError(this.handleError<Film>('deleteMovie'))
    );
  }
  /** PUT: update the hero on the server */
  updateMovie(movie: Film): Observable<any> {
    return this.httpClient.put(this.filmUrl, movie, this.httpOptions).pipe(
      tap((_) => console.log(`updated movie id=${movie.episode_id}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
