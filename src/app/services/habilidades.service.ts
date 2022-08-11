import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../models/habilidad';
const URL_API = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root',
})
export class HabilidadesService {
  constructor(private http: HttpClient) {}

  public getHabilidades(): Observable<Array<Habilidad>> {
    return this.http.get<Array<Habilidad>>(URL_API + 'habilidades/get');
  }

  public addHabilidad(e: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(URL_API + 'habilidades/add/', e);
  }

  public editHabilidad(e: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(URL_API + `habilidades/edit`, e);
  }

  public deleteHabilidad(id: number): Observable<Habilidad> {
    return this.http.delete<Habilidad>(URL_API + `habilidades/delete/${id}`);
  }
}
