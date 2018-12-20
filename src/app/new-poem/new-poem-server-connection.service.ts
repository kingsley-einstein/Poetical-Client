import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NewPoemServerConnectionService {

    constructor(private connector: HttpClient) {}

    createPoem(form: any, user: any) {
        return this.connector
                   .post(`${environment._api}/poems/create?username=${user}&access_token=${localStorage.getItem('token')}`, {
                       title: form.value.title, 
                       content: form.value.content
                    });
    }
}