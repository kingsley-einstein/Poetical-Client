import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Logout } from '../Logout';
import { Observable } from 'rxjs';

@Injectable()
export class OnlyLoggedUser implements CanActivate {

    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        if (!localStorage.getItem('user')) {
            
            alert('You need to login to continue');

            Logout.logout(this.router);

            return false;
        }

        return true;
    }
}