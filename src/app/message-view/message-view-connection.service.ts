import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageViewService {

    constructor(private connector: HttpClient) {}

    getMessageDetail(id: any, page: any) {
        return this.connector
                   .get(`${environment._api}/messages/${id}?access_token=${localStorage.getItem('token')}&page=${page}`);
    }

    sendText(author: any, message: any, page: any, text: any) {
        return this.connector
                   .post(`${environment._api}/messages/send_text?author=${author}&message=${message}&page=${page}&access_token=${localStorage.getItem('token')}`, {
                       text: text
                   });
    }
}