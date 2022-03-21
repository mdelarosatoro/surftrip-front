import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeletePhotoI, UploadPhotoI } from '../interfaces/photos.interfaces';
import {
    SurfcampI,
    UpdatedSurfcampI,
} from '../interfaces/surfcamps.interfaces';

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

    updateSurfcamp(
        token: string,
        surfcampId: string,
        updatedSurfcamp: UpdatedSurfcampI
    ): Observable<SurfcampI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.patch<SurfcampI>(
            `${this.authUrl}${surfcampId}`,
            updatedSurfcamp,
            { headers }
        );
    }

    addPhoto(
        token: string,
        surfcampId: string,
        newPhoto: UploadPhotoI
    ): Observable<SurfcampI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.post<SurfcampI>(
            `${this.authUrl}${surfcampId}/photos`,
            newPhoto,
            { headers }
        );
    }

    deletePhoto(
        token: string,
        surfcampId: string,
        deletePhoto: DeletePhotoI
    ): Observable<SurfcampI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.patch<SurfcampI>(
            `${this.authUrl}${surfcampId}/photos`,
            deletePhoto,
            { headers }
        );
    }
}
