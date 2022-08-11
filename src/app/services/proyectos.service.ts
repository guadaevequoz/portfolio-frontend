import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
const URL_API = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  constructor(private http: HttpClient) {}

  public getProyectos(): Observable<Array<Proyecto>> {
    return this.http.get<Array<Proyecto>>(URL_API + 'proyectos/get');
  }

  public addProyecto(e: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(URL_API + 'proyectos/add/', e);
  }

  public editProyecto(e: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(URL_API + `proyectos/edit`, e);
  }

  public deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(URL_API + `proyectos/delete/${id}`);
  }
}
