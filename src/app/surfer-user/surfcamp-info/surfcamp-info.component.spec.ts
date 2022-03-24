import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { SurfcampInfoComponent } from './surfcamp-info.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('SurfcampInfoComponent', () => {
    let component: SurfcampInfoComponent;
    let fixture: ComponentFixture<SurfcampInfoComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getSurfcampById: jasmine.createSpy('getSurfcampById'),
    };
    mockSurfcampsService.getSurfcampById.and.returnValue(
        of(getSurfcampResponse)
    );

    let route: ActivatedRoute;
    const mockRoute = {
        snapshot: {
            paramMap: { get: jasmine.createSpy('get') },
        },
    };
    mockRoute.snapshot.paramMap.get.and.returnValue('6230dedcb4bb4b716a3d1167');

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SurfcampInfoComponent],
            imports: [HttpClientTestingModule, CoreModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
                { provide: ActivatedRoute, useValue: mockRoute },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SurfcampInfoComponent);
        surfcampsService = TestBed.inject(SurfcampsService);
        route = TestBed.inject(ActivatedRoute);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        expect(component.route.snapshot.paramMap.get).toHaveBeenCalled();
        expect(component.surfcampsService.getSurfcampById).toHaveBeenCalled();
        expect(component.surfcamp).toEqual(getSurfcampResponse);
    });
});
