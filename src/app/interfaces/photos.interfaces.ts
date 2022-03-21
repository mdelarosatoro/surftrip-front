export interface PhotoI {
    _id: string;
    photoUrl: string;
    description: string;
}

export interface UploadPhotoI {
    photoUrl: string;
    description: string;
}

export interface DeletePhotoI {
    deletePhotoUrl: string;
}
