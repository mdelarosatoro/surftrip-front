import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    PackageI,
    PackageQueryI,
    UpdatedPackageI,
} from '../interfaces/packages.interfaces';

@Injectable({
    providedIn: 'root',
})
export class PackagesService {
    packageUrl: string;
    constructor(private http: HttpClient) {
        this.packageUrl = 'http://localhost:4500/packages/';
    }

    getAllPackages(token: string): Observable<PackageI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<PackageI[]>(this.packageUrl, { headers });
    }

    getPackageById(token: string, id: string): Observable<PackageI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<PackageI>(`${this.packageUrl}${id}`, { headers });
    }

    updatePackage(
        token: string,
        id: string,
        updatedPackage: UpdatedPackageI
    ): Observable<PackageI> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.put<PackageI>(
            `${this.packageUrl}${id}`,
            updatedPackage,
            {
                headers,
            }
        );
    }

    bookPackage(token: string, id: string): Observable<{ message: string }> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get<{ message: string }>(
            `${this.packageUrl}${id}/book`,
            {
                headers,
            }
        );
    }

    search(token: string, query: PackageQueryI): Observable<PackageI[]> {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        const queryString = `days=${query.days}&price=${query.price}&location=${query.location}&rating=${query.rating}&skillBeginner=${query.skillBeginner}&skillIntermediate=${query.skillIntermediate}&skillAdvanced=${query.skillAdvanced}&skillExpert=${query.skillExpert}`;
        return this.http.get<PackageI[]>(
            `${this.packageUrl}search?${queryString}`,
            {
                headers,
            }
        );
    }
}
