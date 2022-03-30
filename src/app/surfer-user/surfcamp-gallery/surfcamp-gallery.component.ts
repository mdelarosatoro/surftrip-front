import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    faArrowLeft,
    faArrowRight,
    faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { PhotoI } from 'src/app/interfaces/photos.interfaces';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-surfcamp-gallery',
    templateUrl: './surfcamp-gallery.component.html',
    styleUrls: ['./surfcamp-gallery.component.scss'],
})
export class SurfcampGalleryComponent implements OnInit {
    faArrowRight = faArrowRight;
    faArrowLeft = faArrowLeft;
    faMinusCircle = faMinusCircle;
    auth!: UserLoginResponseI;
    surfcampId!: string;
    surfcamp!: SurfcampI;
    overlayImg: PhotoI;
    overlayState: boolean;
    constructor(
        public route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public surfcampsService: SurfcampsService
    ) {
        this.surfcamp = {
            _id: '',
            email: '',
            username: '',
            name: '',
            rating: '',
            packages: [],
            role: '',
            photos: [],
            skillLevels: [],
            location: [],
            description: '',
            comments: [],
            customers: [],
        };
        this.overlayImg = { _id: '', photoUrl: '', description: '' };
        this.overlayState = false;
    }

    ngOnInit(): void {
        this.surfcampId = this.route.snapshot.paramMap.get('id') as string;
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfcampsService
                    .getSurfcampById(this.auth.token, this.surfcampId)
                    .subscribe((resp) => {
                        this.surfcamp = resp;
                    });
            });
    }

    showOverlay(photo: PhotoI) {
        this.overlayImg = photo;
        this.overlayState = true;
    }

    hideOverlay(e: any) {
        e.stopPropagation();
        this.overlayState = false;
    }

    nextPhoto() {
        const possibleIndex =
            this.surfcamp.photos.findIndex(
                (item) => item._id === this.overlayImg._id
            ) + 1;
        this.overlayImg =
            possibleIndex > this.surfcamp.photos.length - 1
                ? this.surfcamp.photos[this.surfcamp.photos.length - 1]
                : this.surfcamp.photos[possibleIndex];
    }

    previousPhoto() {
        const possibleIndex =
            this.surfcamp.photos.findIndex(
                (item) => item._id === this.overlayImg._id
            ) - 1;
        this.overlayImg =
            possibleIndex < 0
                ? this.surfcamp.photos[0]
                : this.surfcamp.photos[possibleIndex];
    }
}
