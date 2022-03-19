import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-button-back',
    templateUrl: './button-back.component.html',
    styleUrls: ['./button-back.component.scss'],
})
export class ButtonBackComponent implements OnInit {
    faArrowLeft = faArrowLeft;
    constructor(private location: Location) {}

    ngOnInit(): void {}

    handleClickBack() {
        this.location.back();
    }
}
