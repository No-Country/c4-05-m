import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class HttpConfigService {
  private _headers!: HttpHeaders;

  constructor(private http: HttpClient, private cookies: CookieService) {

    const theToken = this.cookies.check('token')
    ? this.cookies.get('token')
    : this.cookies.get('emailToken');

    // Aquí se setean los headers
    this._headers = new HttpHeaders({
      /* 'Content-Type': 'application/json', */
      /* 'Access-Control-Allow-Origin': '*', */
      'Authorization':
        'Bearer ' + theToken,
    });
  }

  // Función genérica para realizar cualquier petición POST
  public post<T>(
    url: string,
    data: any,
    activateHeader: boolean = false
  ): Observable<T> {
    return this.http.post<T>(
      url,
      data,
      activateHeader ? { headers: this._headers } : {}
    );
  }

  // Función genérica para realizar cualquier petición GET
  public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
    return this.http.get<T>(
      url,
      activateHeader ? { headers: this._headers } : {}
    );
  }
}
