import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordServerConnectionService {

  constructor(private connector: HttpClient) { }

  reset(form) {
    return this
           .connector
           .put(`${environment._api}/users/change_password?email=${form.value.email}`, {password: form.value.password}, {responseType: 'text'});
  }
}
