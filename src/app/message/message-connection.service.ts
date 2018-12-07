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
}