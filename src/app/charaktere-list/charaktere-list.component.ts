import { Component, OnInit } from '@angular/core';

import { Charakter } from '../models/charakter.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-charaktere-list',
  templateUrl: './charaktere-list.component.html',
  styleUrls: ['./charaktere-list.component.css'],
})
export class CharaktereListComponent implements OnInit {
  charaktere: Charakter[] = [];
  start: number = 28;
  end: number = 32;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getCharaktere().subscribe({
      next: (data: Charakter[]) => {
        this.charaktere = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      },
      complete: () => {
        console.log(this.charaktere);
      },
    });
  }
}
