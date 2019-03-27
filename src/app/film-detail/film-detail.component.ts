import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../filmModel';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  film: Film;

  constructor(
    private route: ActivatedRoute,
    private fService: FilmService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.film = this.fService.getFilm(id);  // +number <- konwersja z liczby na string

  }


}
