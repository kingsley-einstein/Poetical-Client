import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsViewServerConnectionService {

  constructor(private connector: HttpClient) { }

  getUserDetails(id: any) {
    return this.connector.get(`${environment._api}/users/${id}?access_token=${localStorage.getItem('token')}`);
  }

  getPoemsByUser(author: any, page: any) {
    return this.connector.get(`${environment._api}/poems/find?author=${author}&page=${page}&access_token=${localStorage.getItem('token')}`);
  }

  getPoem(id: any) {
    return this.connector.get(`${environment._api}/poems/find/${id}?access_token=${localStorage.getItem('token')}`);
  }
}
