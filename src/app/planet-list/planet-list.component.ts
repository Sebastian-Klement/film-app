import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Planet } from '../models/planet.model';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
})
export class PlanetListComponent implements OnInit {
  name: string = 'Paneten';
  planets: any;
  start: number = 29;
  end: number = 32;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getPlanets().subscribe({
      next: (data: Planet[]) => {
        this.planets = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log(this.planets);
      },
    });
  }
}
