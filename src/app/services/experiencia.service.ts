import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';
const URL_API = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  constructor(private http: HttpClient) {}

  public getExperiencia(): Observable<Array<Experiencia>> {
    return this.http.get<Array<Experiencia>>(URL_API + 'trabajos/get');
  }

  public addExperiencia(e: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(URL_API + 'trabajos/add/', e);
  }

  public editExperiencia(e: Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(URL_API + `trabajos/edit`, e);
  }

  public deleteExperiencia(id: number): Observable<Experiencia> {
    return this.http.delete<Experiencia>(URL_API + `trabajos/delete/${id}`);
  }
}
