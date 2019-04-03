import { Observable } from 'rxjs';
import { ThemoviedbService } from './../themoviedb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.scss']
})
export class SearchFilmComponent implements OnInit {

  movieList: any[] = [];
  // const movies: any;
  movieList$ = new Observable<any>();

  constructor(private themoviedb: ThemoviedbService) { }

  ngOnInit() {
  }

  searchFilm(data) {

    this.movieList$ = this.themoviedb.searchMovie(data.target.value);

    // this.movies = this.themoviedb.searchMovie(data.target.value);

    // this.movies.subscribe(ret =>
    //   this.movieList = ret.results
    // );
  }

  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   //Add 'implements OnDestroy' to the class.
  //   this.movies.unsubscribe();
  // }

}
