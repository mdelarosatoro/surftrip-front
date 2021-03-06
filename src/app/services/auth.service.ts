import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
    CreateSurfcampI,
    SurfcampI,
    SurfcampLoginI,
    SurfcampLoginResponseI,
    SurfcampLoginTokenResponseI,
} from '../interfaces/surfcamps.interfaces';
import {
    CreateUserI,
    UserI,
    UserLoginI,
    UserLoginResponseI,
} from '../interfaces/users.interfaces';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authUrl: string;
    constructor(private http: HttpClient) {
        this.authUrl = `${environment.API_URL}auth/`;
    }

    registerSurfcamp(newSurfcamp: CreateSurfcampI): Observable<any> {
        return this.http.post<SurfcampI>(
            this.authUrl + 'surfcamps/register',
            newSurfcamp
        );
    }

    loginSurfcamp(
        credentials: SurfcampLoginI
    ): Observable<SurfcampLoginResponseI> {
        return this.http.post<SurfcampLoginResponseI>(
            this.authUrl + 'surfcamps/login',
            credentials
        );
    }

    registerUser(newUser: CreateUserI): Observable<UserI> {
        return this.http.post<UserI>(this.authUrl + 'users/register', newUser);
    }

    loginUser(credentials: UserLoginI): Observable<UserLoginResponseI> {
        return this.http.post<UserLoginResponseI>(
            this.authUrl + 'users/login',
            credentials
        );
    }

    loginToken(token: string): Observable<SurfcampLoginTokenResponseI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<SurfcampLoginTokenResponseI>(
            this.authUrl + 'login-token',
            {
                headers: headers,
            }
        );
    }
}
