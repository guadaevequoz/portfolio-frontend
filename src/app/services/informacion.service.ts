import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Informacion } from '../models/informacion';

const URL_API = 'https://argentinaprograma-portfolio.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class InformacionService {
  constructor(private http: HttpClient) {}

  public getInformacion(): Observable<Informacion> {
    return this.http.get<Informacion>(URL_API + 'informacion/get');
  }

  public editInformacion(id: number, e: Informacion): Observable<Informacion> {
    return this.http.put<Informacion>(URL_API + `informacion/edit/${id}`, e);
  }
}
