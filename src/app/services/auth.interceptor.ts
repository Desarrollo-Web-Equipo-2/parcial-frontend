import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, mergeMap, Observable } from 'rxjs';
import { Preferences } from '@capacitor/preferences';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(Preferences.get({ key: 'Authorization' })).pipe(
            mergeMap((result: any) => {
                const { value } = result;

                if (!value) {
                    return next.handle(req);
                }

                const cloned = req.clone({
                    setHeaders: { 'Authorization': value }
                });

                return next.handle(cloned);
            })
        );
    }
}
