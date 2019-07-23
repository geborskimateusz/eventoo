import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string): Observable<User> {
        return this.http.post<User>('http://localhost:8080/api/v1/user/login', { username: email, password: password });
    }
}