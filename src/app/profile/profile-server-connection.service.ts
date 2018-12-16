import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileServerConnectionService {

  constructor(private connector: HttpClient) { }

  getUser(id: number) {
    return this.connector
               .get(`${environment._api}/users/${id}?access_token=${localStorage.getItem('token')}`);
  }

  getAllPoemsByUser(username: string, page: number) {
    return this.connector
               .get(`${environment._api}/poems/find?author=${username}&page=${page}&access_token=${localStorage.getItem('token')}`);
  }

  uploadPhoto(form: any, id: number) {
    return this.connector
               .post(`${environment._api}/pictures/new_picture?user_id=${id}&access_token=${localStorage.getItem('token')}`, form, {responseType: 'text'});
  }
}
