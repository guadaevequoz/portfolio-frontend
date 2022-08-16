import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';
const URL_API = 'https://argentinaprograma-portfolio.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private http: HttpClient) {}

  public getEducacion(): Observable<Array<Educacion>> {
    return this.http.get<Array<Educacion>>(URL_API + 'educacion/get');
  }

  public addEducacion(e: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(URL_API + 'educacion/add', e);
  }

  public editEducacion(e: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(URL_API + `educacion/edit/`, e);
  }

  public deleteEducacion(id: number): Observable<Educacion> {
    return this.http.delete<Educacion>(URL_API + `educacion/delete/${id}`);
  }
}
