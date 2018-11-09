import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const apiRoot = environment._api;

@Injectable({
  providedIn: 'root'
})
export class RegistrationServerConnectionService {

  constructor(public registrationConnector: HttpClient) { }

  post(form, gender) {
    return this
           .registrationConnector
           .post(`${apiRoot}/users/register`, {username: form.value.username, password: form.value.password, email: form.value.email, gender: gender});
  }
}
