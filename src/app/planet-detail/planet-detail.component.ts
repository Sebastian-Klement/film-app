import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

import { Planet } from '../models/planet.model';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css'],
})
export class PlanetDetailComponent implements OnInit {
  planet: Planet = {
    climate: '',
    created: '',
    diameter: '',
    edited: '',
    films: [],
    gravity: '',
    name: '',
    orbital_period: '',
    population: '',
    residents: [],
    rotation_period: '',
    surface_water: '',
    terrain: '',
    url: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.filmService.getPlanetById(id).subscribe({
      next: (data: Planet) => {
        this.planet = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log(this.planet);
      },
    });
  }
}
