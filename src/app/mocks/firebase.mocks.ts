import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FirebaseMock {
    constructor() {}

    ref(path: string) {
        return {
            getDownloadURL() {
                return of(path);
            },
        };
    }
    uploadBytes(imageRef: any, fileToUpload: any) {
        return {
            getDownloadURL() {
                return of('Ok');
            },
        };
    }

    getDownloadURL(imageRef: any) {
        return {
            getDownloadURL() {
                return of('fakeUrl');
            },
        };
    }
}
