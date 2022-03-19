import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurfcampI } from '../interfaces/surfcamps.interfaces';

@Injectable({
    providedIn: 'root',
})
export class SurfcampsService {
    authUrl: string;
    constructor(private http: HttpClient) {
        this.authUrl = 'http://localhost:4500/surfcamps/';
    }

    getSurfcampPackages(token: string, surfcampId: string) {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get(`${this.authUrl}${surfcampId}/packages`, {
            headers,
        });
    }

    getSurfcampById(token: string, surfcampId: string): Observable<SurfcampI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<SurfcampI>(`${this.authUrl}${surfcampId}`, {
            headers,
        });
    }
}
