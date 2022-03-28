import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
    faLockOpen,
    faIdCard,
    faBox,
    faPeopleCarry,
    faInfoCircle,
    faFolderOpen,
    faArrowCircleDown,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { MenuItemI } from 'src/app/interfaces/menu.interfaces';
import {
    SurfcampI,
    SurfcampLoginResponseI,
} from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { logout } from 'src/app/state/auth/auth.actions';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    faGlobe = faGlobe;
    faLockOpen = faLockOpen;
    faIdCard = faIdCard;
    faBox = faBox;
    faFolderOpen = faFolderOpen;
    faPeopleCarry = faPeopleCarry;
    faInfoCircle = faInfoCircle;
    faArrowCircleDown = faArrowCircleDown;
    auth!: SurfcampLoginResponseI | UserLoginResponseI;
    @Input() menuState!: boolean;
    @Output() menuClickEvent: EventEmitter<boolean>;

    constructor(
        private store: Store<{
            auth: SurfcampLoginResponseI | UserLoginResponseI;
        }>
    ) {
        this.menuClickEvent = new EventEmitter();
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
            });
    }

    toggleMenu() {
        this.menuClickEvent.next(false);
    }

    logout() {
        localStorage.removeItem('token');
        this.store.dispatch(logout({ logout: { username: '', password: '' } }));
        this.toggleMenu();
    }
}
