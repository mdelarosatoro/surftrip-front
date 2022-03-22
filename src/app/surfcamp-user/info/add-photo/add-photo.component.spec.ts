import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import * as firebase from 'firebase/storage';

import { AddPhotoComponent } from './add-photo.component';
import { uploadBytes } from 'firebase/storage';

const initialState = {
    auth: {
        id: '12345',
        surfcamp: getSurfcampResponse,
    },
};

describe('AddPhotoComponent', () => {
    let component: AddPhotoComponent;
    let fixture: ComponentFixture<AddPhotoComponent>;
    let surfcampsService: SurfcampsService;
    const mockService = {
        addPhoto: jasmine.createSpy('addPhoto'),
    };
    mockService.addPhoto.and.returnValue(of(getSurfcampResponse));

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
                { provide: SurfcampsService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddPhotoComponent);
        surfcampsService = TestBed.inject(SurfcampsService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        var file = new File([] as BlobPart[], 'test-file.jpg', {
            lastModified: 1234,
            type: 'image/jpeg',
        });
        const e = {
            target: {
                files: [file],
            },
        };

        // spyOn(firebase, 'getStorage');
        // spyOn(firebase, 'uploadBytes');
        // spyOn(firebase, 'getDownloadUrl' as never);
        // spyOnProperty(firebase, 'uploadBytes', 'get').and.returnValue('');

        expect(component).toBeTruthy();

        component.handleFileInput(e);
        expect(component.fileToUpload).toBeTruthy();

        // component.handleSubmit();
        // expect(uploadBytes).toHaveBeenCalled();
        // expect(firebase.getDownloadURL).toHaveBeenCalled();
    });
});
