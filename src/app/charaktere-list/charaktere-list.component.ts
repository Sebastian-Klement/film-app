import { Component, OnInit } from '@angular/core';

import { Charakter } from '../charakter.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-charaktere-list',
  templateUrl: './charaktere-list.component.html',
  styleUrls: ['./charaktere-list.component.css'],
})
export class CharaktereListComponent implements OnInit {
  charaktere: Charakter[] = [];

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService
      .getCharaktere()
      .subscribe((result) => (this.charaktere = result));
  }
}
