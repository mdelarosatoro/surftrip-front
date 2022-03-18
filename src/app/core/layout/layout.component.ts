import { Component, OnInit } from '@angular/core';
import { MenuItemI } from 'src/app/interfaces/menu.interfaces';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
    menuState: boolean;
    constructor() {
        this.menuState = false;
    }

    ngOnInit(): void {}

    toggleMenu(newState: boolean) {
        this.menuState = newState;
    }
}
