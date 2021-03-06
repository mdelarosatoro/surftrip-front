import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeletePhotoI, UploadPhotoI } from '../interfaces/photos.interfaces';
import {
    AddCommentI,
    CommentsI,
    CommentsPopulatedMI,
    SurfcampI,
    SurfcampQueryI,
    UpdatedSurfcampI,
} from '../interfaces/surfcamps.interfaces';

@Injectable({
    providedIn: 'root',
})
export class SurfcampsService {
    authUrl: string;
    constructor(private http: HttpClient) {
        this.authUrl = `${environment.API_URL}surfcamps/`;
    }

    getAllSurfcamps(token: string): Observable<SurfcampI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<SurfcampI[]>(this.authUrl, {
            headers,
        });
    }

    search(token: string, query: SurfcampQueryI): Observable<SurfcampI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        const queryString = `location=${query.location}&rating=${query.rating}&skillBeginner=${query.skillBeginner}&skillIntermediate=${query.skillIntermediate}&skillAdvanced=${query.skillAdvanced}&skillExpert=${query.skillExpert}`;
        return this.http.get<SurfcampI[]>(
            `${this.authUrl}search?${queryString}`,
            {
                headers,
            }
        );
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

    getSurfcampCommentsById(
        token: string,
        surfcampId: string
    ): Observable<CommentsPopulatedMI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<CommentsPopulatedMI[]>(
            `${this.authUrl}${surfcampId}/comments`,
            {
                headers,
            }
        );
    }

    addComment(
        token: string,
        surfcampId: string,
        newComment: AddCommentI
    ): Observable<CommentsI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.post<CommentsI[]>(
            `${this.authUrl}${surfcampId}/comments`,
            newComment,
            {
                headers,
            }
        );
    }
}
