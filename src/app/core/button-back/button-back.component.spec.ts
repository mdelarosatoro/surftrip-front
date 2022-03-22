import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonBackComponent } from './button-back.component';

describe('ButtonBackComponent', () => {
    let component: ButtonBackComponent;
    let fixture: ComponentFixture<ButtonBackComponent>;
    const locationStub = {
        back: jasmine.createSpy('back'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ButtonBackComponent],
            imports: [FontAwesomeModule],
            providers: [{ provide: Location, useValue: locationStub }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonBackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('Should call handleClickBack when clicking on it', () => {
        const location = fixture.debugElement.injector.get(Location);
        const hostElement: HTMLElement = fixture.nativeElement;
        const buttonElement: HTMLButtonElement =
            hostElement.querySelector('button')!;

        // Dispatch a DOM event so that Angular learns of input value change.
        buttonElement.dispatchEvent(new Event('click'));

        // Tell Angular to update the display binding through the title pipe
        fixture.detectChanges();

        expect(location.back).toHaveBeenCalled();
    });
});
