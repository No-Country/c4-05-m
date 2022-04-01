import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  private _headers!: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    // Aquí se setean los headers
    this._headers = new HttpHeaders({
      'Content-Type':  'application/json',
      // Authorization: 'my-auth-token'
    });
  }

  // Función genérica para realizar cualquier petición post
  public post<T>(url: string, data: any, activateHeader: boolean = false): Observable<T> {
    return this.http.post<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }
}
