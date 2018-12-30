import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageConnectionService {
    constructor(private connector: HttpClient) {}

    getReceivedMessages(user: any, page: any) {
        return this.connector
                   .get(`${environment._api}/messages/received/${page}?recepient=${user}&access_token=${localStorage.getItem('token')}`);
    }

    getSentMessages(user: any, page: any) {
        return this.connector
                   .get(`${environment._api}/messages/all/${page}?author=${user}&access_token=${localStorage.getItem('token')}`);
    }

    deleteMessage(message: any, author: any, page: any) {
        return this.connector
                   .delete(`${environment._api}/messages/delete?message_id=${message}&id=${author}&page=${page}&access_token=${localStorage.getItem('token')}`);
    }
}