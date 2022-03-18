import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faLockOpen, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { MenuItemI } from 'src/app/interfaces/menu.interfaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    faLockOpen = faLockOpen;
    faIdCard = faIdCard;
    @Input() menuState!: boolean;
    @Output() menuClickEvent: EventEmitter<boolean>;

    constructor() {
        this.menuClickEvent = new EventEmitter();
    }

    ngOnInit(): void {}

    toggleMenu() {
        this.menuClickEvent.next(false);
    }
}
