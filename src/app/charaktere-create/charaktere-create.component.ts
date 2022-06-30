import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../film.service';

import { Charakter } from '../charakter.model';

@Component({
  selector: 'app-charaktere-create',
  templateUrl: './charaktere-create.component.html',
  styleUrls: ['./charaktere-create.component.css'],
})
export class CharaktereCreateComponent implements OnInit {
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
    if (this.router.url != '/charaktercreate') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(id);
      this.filmService.getCharakterById(id).subscribe((result) => {
        this.charakter = result;
      });
      // var url = String(this.activatedRoute.snapshot.paramMap.get('url'));
      // console.log(url);
      // this.filmService.searchCharakter(url).subscribe((result) => {
      //   this.charakter = result;
      // });
    }
  }
}
