import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmService } from '../film.service';
import { Charakter } from '../models/charakter.model';

@Component({
  selector: 'app-charaktere-detail',
  templateUrl: './charaktere-detail.component.html',
  styleUrls: ['./charaktere-detail.component.css'],
})
export class CharaktereDetailComponent implements OnInit {
  homeWorldUrl: string = '';
  charakter: Charakter = {
    id: 0,
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    created: '',
    edited: '',
    url: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.filmService.getCharakterById(id).subscribe((charById) => {
      this.charakter = charById;
      this.homeWorldUrl = charById.homeworld;
      this.filmService
        .getPlanetByUrl(charById.homeworld)
        .subscribe((planet) => {
          this.charakter.homeworld = planet['name'];
        });
    });
  }
}
