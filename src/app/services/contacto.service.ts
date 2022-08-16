import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';
const URL_API = 'https://argentinaprograma-portfolio.herokuapp.com/';
@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  constructor(private http: HttpClient) {}

  public getContacto(): Observable<Array<Contacto>> {
    return this.http.get<Array<Contacto>>(URL_API + 'contactos/get');
  }

  public addContacto(c: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(URL_API + 'contactos/add', c);
  }

  public editContacto(c: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(URL_API + `contactos/edit}`, c);
  }

  public deleteContacto(id: number): Observable<Contacto> {
    return this.http.delete<Contacto>(URL_API + `contactos/delete/${id}`);
  }
}
