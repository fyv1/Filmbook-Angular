import { FilmService } from './film.service';
import { Component, OnInit } from '@angular/core';
import { Film } from './filmModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  filmList: Film[];

  constructor(private fservice: FilmService) {

  }

  ngOnInit(): void {
    this.fservice.getFilmsFromLocalStorage();
    this.filmList = this.fservice.getFilms();
    // console.log(this.fservice.filmList);
  }


}
