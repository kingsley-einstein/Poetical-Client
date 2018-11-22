import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BuddyViewServerConnectionService {

    constructor(private connector: HttpClient) {}

    getRequests(page: number, id: number) {
        return this.connector
                   .get(`${environment._api}/friends/frequests/${page}?user_id=${id}&access_token=${localStorage.getItem('token')}`);
    }

    acceptRequest(sender: number, recepient: number, request: number) {
        return this.connector
                   .get(`${environment._api}/friends/accept?received_id=${sender}&receiver_id=${recepient}&request_id=${request}&access_token=${localStorage.getItem('token')}`);
    }

    rejectRequest(request: number) {
        return this.connector
                   .delete(`${environment._api}/friends/reject?request_id=${request}&access_token=${localStorage.getItem('token')}`);
    }
}