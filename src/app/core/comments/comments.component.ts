import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
    CommentsI,
    CommentsPopulatedMStarsI,
} from 'src/app/interfaces/surfcamps.interfaces';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
    faStar = faStar;
    @Input() comments!: CommentsPopulatedMStarsI[];
    constructor() {}

    ngOnInit(): void {}
}
