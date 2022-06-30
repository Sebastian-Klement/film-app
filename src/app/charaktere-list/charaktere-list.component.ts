import { SlicePipe } from '@angular/common';
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
  start: number = 28;
  end: number = 32;

  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.filmService.getCharaktere().subscribe({
      next: (result) => {
        this.charaktere = result;
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
