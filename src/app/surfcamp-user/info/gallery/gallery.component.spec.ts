import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { deletePhoto } from 'src/app/state/surfcamp/surfcamp.actions';

import { GalleryComponent } from './gallery.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;
    let surfcampsService: SurfcampsService;
    const mockService = {
        deletePhoto: jasmine.createSpy('deletePhoto'),
    };
    mockService.deletePhoto.and.returnValue(of(getSurfcampResponse));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GalleryComponent],
            imports: [
                HttpClientTestingModule,
                CoreModule,
                FontAwesomeModule,
                RouterTestingModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: SurfcampsService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        surfcampsService = TestBed.inject(SurfcampsService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        component.deletePhoto(getSurfcampResponse.photos[0].photoUrl);
        expect(surfcampsService.deletePhoto).toHaveBeenCalled();
    });
});
