import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatedPackageI } from '../interfaces/packages.interfaces';

@Injectable({
    providedIn: 'root',
})
export class PackagesService {
    packageUrl: string;
    constructor(private http: HttpClient) {
        this.packageUrl = 'http://localhost:4500/packages/';
    }

    getPackageById(id: string, token: string) {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.get(`${this.packageUrl}${id}`, { headers });
    }

    updatePackage(token: string, id: string, updatedPackage: UpdatedPackageI) {
        const headers = new HttpHeaders().set(
            'Authorization',
            `Bearer ${token}`
        );
        return this.http.put(`${this.packageUrl}${id}`, updatedPackage, {
            headers,
        });
    }
}
