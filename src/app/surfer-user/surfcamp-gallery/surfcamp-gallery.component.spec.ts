import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { SurfcampGalleryComponent } from './surfcamp-gallery.component';

const initialState = {
    auth: {
        id: '12345',
        token: '123',
    },
};

describe('SurfcampGalleryComponent', () => {
    let component: SurfcampGalleryComponent;
    let fixture: ComponentFixture<SurfcampGalleryComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampsService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

    let activatedRoute: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampGalleryComponent],
            imports: [HttpClientTestingModule, CoreModule, RouterTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: ActivatedRoute, useValue: mockRoute },
                { provide: SurfcampsService, useValue: mockSurfcampsService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampGalleryComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        const expectedResponse = {
            _id: '6230ded0b4bb4b716a3d1163',
            rating: 0,
            packages: [
                {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                    surfcamp: {} as SurfcampI,
                },
            ],
            role: 'surfcamp',
            photos: [
                {
                    photoUrl:
                        'https://www.surfindonesia.com/wp-content/uploads/2019/08/rifles-surf-mentawais.jpg',
                    description:
                        'Rifles: One of our prime spots and one of the best rights in the planet.',
                    _id: '6237362d376affc52ca3abdc',
                },
            ],
            skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            location: [1, 2],
            name: 'Clara Camp',
            username: 'test1',
            email: 'test1@test.com',
            comments: [
                {
                    user: '6230dee9b4bb4b716a3d116a',
                    comment: 'Very nice',
                    rating: 3,
                    _id: '6231c1d89f67d5fca6ba1c8d',
                },
            ],
            customers: [
                {
                    bookedAt: '1234',
                    user: '6230dee9b4bb4b716a3d116a',
                    package: '6230dedcb4bb4b716a3d1167',
                    _id: '6230defab4bb4b716a3d1173',
                },
            ],
            description: 'solo para c lara',
        };

        console.log(component.surfcamp);
        expect(component.surfcamp).toEqual(expectedResponse);

        const photo = {
            _id: '1234',
            photoUrl: 'test',
            description: 'test',
        };

        expect(component.overlayState).toBe(false);
        component.showOverlay(photo);
        expect(component.overlayImg).toEqual(photo);
        expect(component.overlayState).toBe(true);

        const mockEvent = {
            stopPropagation: jasmine.createSpy('stopPropagation'),
            target: {
                getAttribute: jasmine.createSpy('getAttribute'),
                classList: {
                    contains: jasmine.createSpy('contains'),
                },
            },
        };
        mockEvent.target.classList.contains.and.returnValues(false, true);
        component.hideOverlay(mockEvent);
        expect(component.overlayState).toBe(false);

        mockEvent.target.classList.contains.and.returnValues(false);
        mockEvent.target.getAttribute.and.returnValue('currentColor');
        component.hideOverlay(mockEvent);
        expect(component.overlayState).toBe(false);
    });
});
