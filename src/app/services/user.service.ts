import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost:3000/api/auth/login', {email, password});
    }

    register(email: string, password: string) {
        return this.http.post('http://localhost:3000/api/user', {email, password});
    }

    isValidToken() {
        return this.http.get<boolean>('http://localhost:3000/api/auth/isValidToken');
    }
}
