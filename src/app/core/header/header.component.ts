import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    faBars = faBars;
    faTimes = faTimes;
    @Input() menuState!: boolean;
    @Output() toggleMenuEvent: EventEmitter<boolean>;

    constructor() {
        this.toggleMenuEvent = new EventEmitter();
    }

    ngOnInit(): void {}

    toggleMenu() {
        this.toggleMenuEvent.next(!this.menuState);
    }
}
