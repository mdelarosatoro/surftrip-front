import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { app } from '../firebase/connection';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {
    storage: any;
    constructor() {}

    async getDownloadUrl(fileToUpload: any) {
        const storage = getStorage(app);
        const imageRef = ref(storage, fileToUpload.name);
        await uploadBytes(imageRef, fileToUpload);
        return getDownloadURL(imageRef);
    }
}
