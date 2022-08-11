import { Component, OnInit } from '@angular/core';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  titulo: string = '<Guadalupe Evequoz />';
  data: Informacion = new Informacion(0, '', '', '');

  constructor() {}

  ngOnInit(): void {}
}
