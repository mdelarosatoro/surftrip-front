import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-msg',
    templateUrl: './error-msg.component.html',
    styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent implements OnInit {
    @Input() errorStatus!: boolean;
    @Input() errorMessage!: string;

    constructor() {}

    ngOnInit(): void {}
}
