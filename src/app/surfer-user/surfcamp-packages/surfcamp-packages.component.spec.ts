import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SurfcampPackagesComponent } from './surfcamp-packages.component';

describe('SurfcampPackagesComponent', () => {
    let component: SurfcampPackagesComponent;
    let fixture: ComponentFixture<SurfcampPackagesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampPackagesComponent],
            imports: [RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampPackagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
