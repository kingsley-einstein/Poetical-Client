import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ListServerConnectionService {
    
    constructor(private connector: HttpClient) {}

    listAllUsers(page: number) {
        return this.connector
                   .get(`${environment._api}/users/all/${page-1}`);
    }

    listAllPoems(page: number) {
        return this.connector
                   .get(`${environment._api}/poems/all/${page-1}?access_token=${localStorage.getItem('token')}`);
    }

    likePoem(id: number, user: any) {
        return this.connector
                   .get(`${environment._api}/poems/${id}/like?user_id=${user}&access_token=${localStorage.getItem('token')}`);
    }
}