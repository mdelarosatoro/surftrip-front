import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
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
    faMinusCircle = faMinusCircle;
    auth!: UserLoginResponseI;
    surfcampId!: string;
    surfcamp!: SurfcampI;
    overlayImg: PhotoI;
    overlayState: boolean;
    constructor(
        private route: ActivatedRoute,
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        private surfcampsService: SurfcampsService
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
            location: '',
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
                        console.log(resp);
                        this.surfcamp = resp;
                    });
            });
    }

    showOverlay(photo: PhotoI) {
        this.overlayImg = photo;
        this.overlayState = true;
    }

    hideOverlay() {
        this.overlayState = false;
    }
}
