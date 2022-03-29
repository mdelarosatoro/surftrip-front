import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import * as helpers from 'src/app/helpers/surfcampData.helpers';
import { PackageithReviewScoreI } from 'src/app/interfaces/packages.interfaces';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { mockUser } from 'src/app/mocks/users.mocks';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampHelpersService } from 'src/app/services/surfcamp-helpers.service';
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
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
    };

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    let packagesService: PackagesService;
    const mockPackageService = {
        getAllPackages: jasmine.createSpy('getAllPackages'),
    };
    const packageMockWithLocation = {
        ...packageMock,
        surfcamp: {
            ...packageMock.surfcamp,
            location: [-9.371351359722212, 39.360031662513734],
        },
    };
    mockPackageService.getAllPackages.and.returnValue(
        of([packageMockWithLocation])
    );

    const packageReviewDataResponse = [
        {
            _id: '6230dedcb4bb4b716a3d1167',
            surfcamp: {
                _id: '6230ded0b4bb4b716a3d1163',
                rating: 0,
                photos: [
                    {
                        photoUrl:
                            'https://www.perfectwavetravel.com/wp-content/uploads/2019/12/kandui-villas-11.jpg',
                        description:
                            'Kandui Villas: The best surfcamp on Earth',
                        _id: '62373376376affc52ca3aba3',
                    },
                ],
                skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
                location: [-9.371351359722212, 39.360031662513734],
                name: 'Clara Camp',
                email: 'test1@test.com',
                comments: [
                    {
                        user: '6230dee9b4bb4b716a3d116a',
                        comment: 'Very nice',
                        rating: 3,
                        _id: '6231c1d89f67d5fca6ba1c8d',
                    },
                ],
                description: 'solo para c lara',
                reviewScore: 0,
                starArr: [],
                emptyStarArr: [1, 1, 1, 1, 1],
            },
            icon: 'https://cdn-icons-png.flaticon.com/512/157/157796.png',
            description:
                'blalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbabla',
            days: 10,
            price: 700,
            name: 'test',
        },
    ];

    let helpers: SurfcampHelpersService;
    const mockHelpers = {
        addPackageReviewData: jasmine.createSpy('addPackageReviewData'),
        addLocationStringToPackages: jasmine.createSpy(
            'addLocationStringToPackages'
        ),
    };
    mockHelpers.addPackageReviewData.and.returnValue(packageReviewDataResponse);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PackageSearchComponent],
            imports: [
                HttpClientTestingModule,
                FontAwesomeModule,
                RouterTestingModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: Router, useValue: mockRouterService },
                { provide: SurfcampHelpersService, useValue: mockHelpers },
                { provide: PackagesService, useValue: mockPackageService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PackageSearchComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        router = TestBed.inject(Router);
        packagesService = TestBed.inject(PackagesService);
        helpers = TestBed.inject(SurfcampHelpersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        console.log(component.packages);
        expect(component.packages).toEqual(packageReviewDataResponse);

        expect(component.filterState).toBe(false);
        component.toggleFilter();
        expect(component.filterState).toBe(true);

        component.handleFilter([packageMockWithLocation]);
        console.log(component.packages);
        expect(component.packages).toEqual(packageReviewDataResponse);

        component.goToDetails(packageReviewDataResponse[0]);
        expect(component.router.navigateByUrl).toHaveBeenCalled();
    });
});
