import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { mockUser } from 'src/app/mocks/users.mocks';

import { PackageSearchComponent } from './package-search.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('PackageSearchComponent', () => {
    let component: PackageSearchComponent;
    let fixture: ComponentFixture<PackageSearchComponent>;

    let router: Router;
    const mockRouterService = {
        nagivateByUrl: jasmine.createSpy('nagivateByUrl'),
    };

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageSearchComponent],
            imports: [HttpClientTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: Router, useValue: mockRouterService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageSearchComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        router = TestBed.inject(Router);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
