import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFilmComponent } from './new-film/new-film.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilmComponent } from './search-film/search-film.component'


@NgModule({
  declarations: [
    AppComponent,
    NewFilmComponent,
    FilmDetailComponent,
    SearchFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
