import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { WorldMapComponent } from './world-map.component';

const initialState = {
    auth: {
        id: '12345',
    },
};

describe('WorldMapComponent', () => {
    let component: WorldMapComponent;
    let fixture: ComponentFixture<WorldMapComponent>;

    let surfcampsService: SurfcampsService;
    const mockSurfcampsService = {
        getAllSurfcamps: jasmine.createSpy('getAllSurfcamps'),
    };
    mockSurfcampsService.getAllSurfcamps.and.returnValue(
        of([getSurfcampResponse])
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WorldMapComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, CoreModule],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockSurfcampsService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WorldMapComponent);
        surfcampsService = TestBed.inject(SurfcampsService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        expect(component.surfampsService.getAllSurfcamps).toHaveBeenCalled();
    });
});
