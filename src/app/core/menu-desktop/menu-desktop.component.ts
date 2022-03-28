import { Component, OnInit } from '@angular/core';
import {
    faArrowCircleDown,
    faBox,
    faFolderOpen,
    faGlobe,
    faIdCard,
    faInfoCircle,
    faLockOpen,
    faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { SurfcampLoginResponseI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { logout } from 'src/app/state/auth/auth.actions';

@Component({
    selector: 'app-menu-desktop',
    templateUrl: './menu-desktop.component.html',
    styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent implements OnInit {
    faIdCard = faIdCard;
    faGlobe = faGlobe;
    faLockOpen = faLockOpen;
    faFolderOpen = faFolderOpen;
    faBox = faBox;
    faPeopleCarry = faPeopleCarry;
    faInfoCircle = faInfoCircle;
    faArrowCircleDown = faArrowCircleDown;
    auth!: SurfcampLoginResponseI | UserLoginResponseI;
    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI | UserLoginResponseI;
        }>
    ) {}

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
            });
    }

    logout() {
        localStorage.removeItem('token');
        this.store.dispatch(logout({ logout: { username: '', password: '' } }));
    }
}
