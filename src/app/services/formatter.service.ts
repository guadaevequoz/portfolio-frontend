import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  constructor() {}

  getStatus(data: boolean): string {
    return data ? 'Completado' : 'En curso';
  }

  private getFecha(fecha: string): string {
    let act = new Date(fecha).toISOString().split('T')[0].split('-');
    act.pop();
    act.reverse();
    return act.join('/');
  }

  getFechaInicial(fecha: string): string {
    return this.getFecha(fecha);
  }

  getFechaFinal(fecha: string): string {
    if (fecha) {
      return this.getFecha(fecha);
    } else {
      return 'Actualidad';
    }
  }
}
