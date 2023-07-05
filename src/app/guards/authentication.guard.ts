import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        return new Promise((resolve) => {
            resolve(true);
            // this.userService.isValidToken().subscribe({
            //     next: (res) => {
            //         resolve(res);
            //     },
            //     error: (err) => {
            //         console.log(err);
            //         resolve(false);
            //         this.router.navigate(['/login']);
            //     }
            // });
        });
    }


}
