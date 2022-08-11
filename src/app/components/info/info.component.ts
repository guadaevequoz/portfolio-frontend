import { Component, OnInit } from '@angular/core';
import { Observable, of, skip } from 'rxjs';
import { Informacion } from 'src/app/models/informacion';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  titulo: string = '';
  data: Informacion = new Informacion(0, '', '', '');

  constructor() {}

  ngOnInit(): void {
    this.write();
  }

  onClick(): void {
    this.write();
  }

  private write(): void {
    let msg: string = '<Guadalupe Evequoz />';
    this.titulo = '_';

    for (let i = 0; i < msg.length; i++) {
      setTimeout(() => {
        const chars = [...this.titulo];
        chars[i] = msg[i];
        if (i < msg.length - 1) {
          chars[i + 1] = '_';
        }
        this.titulo = chars.join('');
      }, 100 * i);
    }
  }
}
