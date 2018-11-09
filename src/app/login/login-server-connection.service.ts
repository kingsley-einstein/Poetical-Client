import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const auth = window.btoa(environment.admin+':'+environment.password);
const apiRoot = environment._api;

let headers = new HttpHeaders({
  'Authorization': `Basic ${auth}`
})

@Injectable({
  providedIn: 'root'
})
export class LoginServerConnectionService {

  constructor(public connection: HttpClient) { }

  retrieveToken(form) {
    //console.log(headers);
    return this
           .connection
           .post(`${apiRoot}/oauth/token?grant_type=client_credentials`, {}, {headers: headers});
  };

  login(form) {
    return this
           .connection
           .post(`${apiRoot}/users/login?access_token=${localStorage.getItem('token')}`, {username: form.value.username, password: form.value.password}, {headers: headers});
  }
}
