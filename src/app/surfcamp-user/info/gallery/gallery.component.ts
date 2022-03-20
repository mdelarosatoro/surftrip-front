import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoI } from 'src/app/interfaces/photos.interfaces';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    auth!: SurfcampLoginResponseI;
    photos: PhotoI[];
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI;
            surfcamp: SurfcampI;
        }>
    ) {
        this.photos = [];
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth, surfcamp: store.surfcamp }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.photos = data.surfcamp.photos;
                console.log(this.photos);
            });
    }
}
