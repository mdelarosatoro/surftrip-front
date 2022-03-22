import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from '../interfaces/users.interfaces';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    apiUrl: string;
    constructor(public http: HttpClient) {
        this.apiUrl = 'http://localhost:4500/users/';
    }
    getAll(token: string): Observable<UserI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<UserI[]>(this.apiUrl, { headers });
    }
    getUserById(token: string, id: string): Observable<UserI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<UserI>(this.apiUrl + id, { headers });
    }
}
