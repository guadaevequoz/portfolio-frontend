import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()

export class InterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('current');

    if (!token) {
      return next.handle(req);
    }
    const headers = new HttpHeaders({
      "Authorization": token,
      "Access-Control-Allow-Origin": req.method
    })
    const clone = req.clone({headers});

    return next.handle(clone);
  }

}