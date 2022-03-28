import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

import { AddPhotoComponent } from './add-photo.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('AddPhotoComponent', () => {
    let component: AddPhotoComponent;
    let fixture: ComponentFixture<AddPhotoComponent>;

    let firebase: FirebaseService;
    const mockFirebase = {
        getDownloadUrl: jasmine.createSpy('getDownloadUrl'),
    };
    mockFirebase.getDownloadUrl.and.resolveTo('fakeUrl');

    let surfcampsService: SurfcampsService;
    const mockService = {
        addPhoto: jasmine.createSpy('addPhoto'),
    };
    mockService.addPhoto.and.returnValue(of(getSurfcampResponse));

    let location: Location;
    const mockLocation = {
        back: jasmine.createSpy('back'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddPhotoComponent],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                HttpClientTestingModule,
                CoreModule,
            ],
            providers: [
                provideMockStore({ initialState }),
                { provide: FirebaseService, useValue: mockFirebase },
                { provide: Location, useValue: mockLocation },
                { provide: SurfcampsService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPhotoComponent);
        firebase = TestBed.inject(FirebaseService);
        surfcampsService = TestBed.inject(SurfcampsService);
        location = TestBed.inject(Location);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', async () => {
        var file = new File([] as BlobPart[], 'test-file.jpg', {
            lastModified: 1234,
            type: 'image/jpeg',
        });
        const e = {
            target: {
                files: [file],
            },
        };

        expect(component).toBeTruthy();

        component.handleFileInput(e);
        expect(component.fileToUpload).toBeTruthy();

        await component.handleSubmit();
        expect(component.firebase.getDownloadUrl).toHaveBeenCalled();
        expect(component.surfcampsService.addPhoto).toHaveBeenCalled();
        expect(component.location.back).toHaveBeenCalled();
    });
});
