import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditarService {


  constructor(
    private http: HttpClient
  ) {}

  updateImg(_id: string, img: any): Observable<any> {
    return this.http.patch(
        `${environment.apiUrl}/user/update-userImg/${_id}`,
        img
      );
    }

  updateData(_id: string, body: any): Observable<any> {
    return this.http.patch(
        `${environment.apiUrl}/user/update-personalData/${_id}`,
        body
      );
    }

  deleteUser(_id: string){
    return this.http.delete(`${environment.apiUrl}/user/delete-user/${_id}`)
  }

  updatePassword(_id: string, body: any){
      return this.http.patch(
          `${environment.apiUrl}/user/update-password/${_id}`,
          body
        );
      }
}
