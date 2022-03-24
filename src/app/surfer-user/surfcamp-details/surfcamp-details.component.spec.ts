import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { SurfcampDetailsComponent } from './surfcamp-details.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('SurfcampDetailsComponent', () => {
    let component: SurfcampDetailsComponent;
    let fixture: ComponentFixture<SurfcampDetailsComponent>;

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
            declarations: [SurfcampDetailsComponent],
            imports: [HttpClientTestingModule, CoreModule, RouterTestingModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
                { provide: ActivatedRoute, useValue: mockRoute },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampDetailsComponent);
        activatedRoute = TestBed.inject(ActivatedRoute);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(activatedRoute.snapshot.paramMap.get).toHaveBeenCalled();
        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();
        expect(component.surfcamp).toEqual(getSurfcampResponse);
    });
});
