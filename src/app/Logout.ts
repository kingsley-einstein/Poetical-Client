import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Logout {
    
    constructor(){}

    public static logout(router: Router) {
        localStorage.clear();
        router.navigate(['home']);
    }
}