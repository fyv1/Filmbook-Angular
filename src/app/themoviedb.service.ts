import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemoviedbService {

  apiKey = 'b92c9f5eeed873a9cd2eac7ae1a739b6';
  theMovieDbURL = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) { }

  searchMovie(searchTxt: string): Observable<any> {

    const url = this.theMovieDbURL
      + 'search/movie?api_key=' + this.apiKey
      + '&query=' + searchTxt;

    return this.http.get(url);

  }
}
