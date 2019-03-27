import { Injectable } from '@angular/core';
import { Film } from './filmModel';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  private filmList: Film[] = [];

  addFilm(film: Film) {
    this.filmList.push(film);
    this.updateLocalStorage();
    console.log(this.filmList);
  }

  getFilms(): Film[] {
    return this.filmList;
  }

  getFilm(id: string): Film {
    return this.filmList.find(el => el.id === id); // !!!
  }

  updateLocalStorage() {
    localStorage.setItem('filmList', JSON.stringify(this.filmList));
  }

  getFilmsFromLocalStorage() {
    this.filmList = JSON.parse(localStorage.getItem('filmList'));
  }

}
