import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Logout } from '../Logout';
//import { catchError } from 'rxjs/internal/operators';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorGuard implements HttpInterceptor {
    
    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
        return next.handle(request)
                   .pipe(
                       tap(() => {

                       }, 
                    (e: any) => {
                        if (e instanceof HttpErrorResponse) {
                            if (e.status === 401 || e.status === 400 || e.status === 0) {
                                alert('You need to login to continue');

                                Logout.logout(this.router);
                            }
                        }
                    },
                () => {

                })
                   )
    }
}