import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/user.model';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../shared/model/user-details';
import { EVENTS_DATASOURCE } from '../shared/fake-datasource/events-datasource';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {

    }

    login(email: string, password: string): Observable<UserDetails> {
        return this.http.post<UserDetails>('http://localhost:8080/api/v1/user/login', { username: email, password: password });
    }

    bootstrapData() {
        return this.http.put('http://localhost:8080/api/v1/events', {events: EVENTS_DATASOURCE})
    }
}