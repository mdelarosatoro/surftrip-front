import { Component, OnInit } from '@angular/core';
import { faLockOpen, faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
    faLockOpen = faLockOpen;
    faIdCard = faIdCard;
    constructor() {}

    ngOnInit(): void {}
}
