import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
