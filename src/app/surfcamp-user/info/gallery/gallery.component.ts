import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { PhotoI } from 'src/app/interfaces/photos.interfaces';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { deletePhoto } from 'src/app/state/surfcamp/surfcamp.actions';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    faPlusCircle = faPlusCircle;
    faTrash = faTrash;
    auth!: SurfcampLoginResponseI;
    surfcampId!: string;
    photos: PhotoI[];
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>,
        private surfcampsService: SurfcampsService
    ) {
        this.photos = [];
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.photos = data.surfcamp.photos;
                this.surfcampId = data.surfcamp._id;
            });
    }

    deletePhoto(url: string) {
        this.surfcampsService
            .deletePhoto(this.auth.token, this.surfcampId, {
                deletePhotoUrl: url,
            })
            .subscribe((resp) => {
                this.store.dispatch(deletePhoto({ newPhotosArr: resp.photos }));
            });
    }
}
