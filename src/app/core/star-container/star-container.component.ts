import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-star-container',
    templateUrl: './star-container.component.html',
    styleUrls: ['./star-container.component.scss'],
})
export class StarContainerComponent implements OnInit {
    starArr: number[];
    @Input() rating!: number;
    faStar = faStar;
    @Output() setRating: EventEmitter<number>;

    constructor() {
        this.starArr = [1, 2, 3, 4, 5];
        this.setRating = new EventEmitter();
    }

    ngOnInit(): void {}

    setMinRating(star: number) {
        if (this.rating === star) {
            this.setRating.next(0);
        } else {
            this.setRating.next(star);
        }
    }
}
