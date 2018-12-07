import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SendMessageService {
    constructor(private connector: HttpClient) {}

    sendMessage(author: any, recepient: any, form: any) {
        return this.connector
                   .post(`${environment._api}/messages/create?author=${author}&recepient=${recepient}&access_token=${localStorage.getItem('token')}`, {text: form.value.text});  
    }
}