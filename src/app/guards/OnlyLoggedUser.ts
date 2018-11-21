import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Logout } from '../Logout';

@Injectable()
export class OnlyLoggedUser implements CanActivate {

    constructor(public router: Router) {}

    canActivate() : boolean{
        if (localStorage.getItem('user')) {
            return true;
        }
        else {
            
            Logout.logout(this.router);

            return false;
        }
    }
}