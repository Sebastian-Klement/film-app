import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FilmService } from '../film.service';
import { Charakter } from '../charakter.model';

@Component({
  selector: 'app-charaktere-detail',
  templateUrl: './charaktere-detail.component.html',
  styleUrls: ['./charaktere-detail.component.css'],
})
export class CharaktereDetailComponent implements OnInit {
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
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(id);
    this.filmService.getCharakterById(id).subscribe((result) => {
      this.charakter = result;
    });
  }
}
