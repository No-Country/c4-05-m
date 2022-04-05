import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private _headers!: HttpHeaders;

  constructor(
    private http: HttpClient,
    private cookies: CookieService
  ) {
    // Aquí se setean los headers
    this._headers = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + this.cookies.get('token')
    });
  }

  // Función genérica para realizar cualquier petición POST
  public post<T>(url: string, data: any, activateHeader: boolean = false): Observable<T> {
    return this.http.post<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  // Función genérica para realizar cualquier petición GET
  public get<T>(url: string, activateHeader: boolean = false): Observable<T> {
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }
}
