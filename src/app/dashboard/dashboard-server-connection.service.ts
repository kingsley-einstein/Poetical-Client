import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServerConnectionService {

  constructor(private connector: HttpClient) { }

  getUserDetails(id: number) {
    return this.connector
               .get(`${environment._api}/users/${id}?access_token=${localStorage.getItem('token')}`);
  }

  uploadPicture(id: number, form: FormData) {
    return this.connector
               .post(`${environment._api}/pictures/new_picture?user_id=${id}&access_token=${localStorage.getItem('token')}`, form, {responseType: 'text'});
  }
}
