import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-film',
  templateUrl: './new-film.component.html',
  styleUrls: ['./new-film.component.scss']
})
export class NewFilmComponent implements OnInit {
  nowyFilm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private fservice: FilmService
    ) { }

  ngOnInit() {
    this.nowyFilm = this.fb.group({
      title: ['', Validators.required],
      poster: [''],
      actors: this.fb.array([]),
      year: ['', Validators.required],
      director: [''],
      genre: this.fb.array([])

    });
  }

  onBtnSubmitClick() {
    console.log(this.nowyFilm);
    const id = (Math.random() * 10000000).toFixed(); // const randomId = ...

    const film = {
      id, // id: id,                    // id: randomId,
      ...this.nowyFilm.value
    };

    this.fservice.addFilm(film);
  }

}
