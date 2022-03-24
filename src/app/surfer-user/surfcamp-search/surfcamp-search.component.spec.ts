import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { mockUser } from 'src/app/mocks/users.mocks';

import { SurfcampSearchComponent } from './surfcamp-search.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: mockUser,
};

describe('SurfcampSearchComponent', () => {
    let component: SurfcampSearchComponent;
    let fixture: ComponentFixture<SurfcampSearchComponent>;

    let router: Router;
    const mockRouterService = {
        nagivateByUrl: jasmine.createSpy('nagivateByUrl'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampSearchComponent],
            imports: [HttpClientTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampSearchComponent);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
