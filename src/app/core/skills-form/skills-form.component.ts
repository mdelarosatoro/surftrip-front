import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-skills-form',
    templateUrl: './skills-form.component.html',
    styleUrls: ['./skills-form.component.scss'],
})
export class SkillsFormComponent implements OnInit {
    @Output() skillChanged: EventEmitter<string>;

    constructor() {
        this.skillChanged = new EventEmitter();
    }

    ngOnInit(): void {}

    emitChange(skill: string) {
        this.skillChanged.next(skill);
    }
}
