import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateSurfcampI, SurfcampI } from '../interfaces/surfcamps.interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authUrl: string;
    constructor(private http: HttpClient) {
        this.authUrl = 'http://localhost:4500/auth/';
    }

    registerSurfcamp(newSurfcamp: CreateSurfcampI): Observable<SurfcampI> {
        return this.http.post<SurfcampI>(
            this.authUrl + 'surfcamps/register',
            newSurfcamp
        );
    }
}
