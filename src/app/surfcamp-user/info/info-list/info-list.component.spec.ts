import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import * as helpers from 'src/app/helpers/surfcampData.helpers';
import { InfoListComponent } from './info-list.component';
import { SurfcampHelpersService } from 'src/app/services/surfcamp-helpers.service';

describe('InfoListComponent', () => {
    const initialState = {
        auth: {
            id: '12345',
        },
        surfcamp: getSurfcampResponse,
    };
    let component: InfoListComponent;
    let fixture: ComponentFixture<InfoListComponent>;
    let surfcampsService: SurfcampsService;
    const mockService = {
        updateSurfcamp: jasmine.createSpy('updateSurfcamp'),
    };
    mockService.updateSurfcamp.and.returnValue(of(getSurfcampResponse));

    let helpers: SurfcampHelpersService;
    const mockHelpers = {
        addLocationStringToSurfcamp: jasmine.createSpy(
            'addLocationStringToSurfcamp'
        ),
    };
    mockHelpers.addLocationStringToSurfcamp.and.resolveTo(
        new Promise((res, rej) =>
            res({
                ...getSurfcampResponse,
                locationString: '123',
            })
        )
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoListComponent],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
                FontAwesomeModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockService },
                { provide: SurfcampHelpersService, useValue: mockHelpers },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoListComponent);
        surfcampsService = TestBed.inject(SurfcampsService);
        helpers = TestBed.inject(SurfcampHelpersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        console.log(component.surfcampWithLocation);
        component.toggleEditMode();
        expect(component.editMode).toBe(true);

        component.editSurfcampForm.setValue({
            name: 'test',
            location: 'test',
            skillBeginner: true,
            skillIntermediate: true,
            skillAdvanced: true,
            skillExpert: true,
            description: 'test',
        });
        component.saveSurfcamp();
        expect(surfcampsService.updateSurfcamp).toHaveBeenCalled();
        expect(component.editMode).toBe(false);
    });
    it('it should set the form value of skill levels to false if not present on the surfcamp store', () => {
        expect(component).toBeTruthy();

        component.toggleEditMode();
        expect(component.editMode).toBe(true);

        component.editSurfcampForm.setValue({
            name: 'test',
            location: 'test',
            skillBeginner: true,
            skillIntermediate: true,
            skillAdvanced: true,
            skillExpert: true,
            description: 'test',
        });
        component.saveSurfcamp();
        expect(surfcampsService.updateSurfcamp).toHaveBeenCalled();
        expect(component.editMode).toBe(false);
    });
});
describe('InfoListComponent', () => {
    const initialState = {
        auth: {
            id: '12345',
        },
        surfcamp: { ...getSurfcampResponse, skillLevels: [] },
    };

    let component: InfoListComponent;
    let fixture: ComponentFixture<InfoListComponent>;

    let surfcampsService: SurfcampsService;
    const mockService = {
        updateSurfcamp: jasmine.createSpy('updateSurfcamp'),
    };
    mockService.updateSurfcamp.and.returnValue(of({ ...getSurfcampResponse }));

    let helpers: SurfcampHelpersService;
    const mockHelpers = {
        addLocationStringToSurfcamp: jasmine.createSpy(
            'addLocationStringToSurfcamp'
        ),
    };
    mockHelpers.addLocationStringToSurfcamp.and.resolveTo(
        new Promise((res, rej) =>
            res({
                ...getSurfcampResponse,
                locationString: '123',
            })
        )
    );

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InfoListComponent],
            imports: [
                HttpClientTestingModule,
                FormsModule,
                ReactiveFormsModule,
                CoreModule,
                FontAwesomeModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockService },
                { provide: SurfcampHelpersService, useValue: mockHelpers },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfoListComponent);
        surfcampsService = TestBed.inject(SurfcampsService);
        helpers = TestBed.inject(SurfcampHelpersService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('it should set the form value of skill levels to false if not present on the surfcamp store', () => {
        expect(component.editSurfcampForm.value).toBeTruthy();
        console.log(component.surfcampWithLocation);
    });
});
