import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { packageMock } from 'src/app/mocks/packages.mocks';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';
import { FirebaseService } from 'src/app/services/firebase.service';
import { PackagesService } from 'src/app/services/packages.service';

import { CreatePackageComponent } from './create-package.component';

const initialState = {
    auth: {
        id: '12345',
    },
    surfcamp: getSurfcampResponse,
};

describe('CreatePackageComponent', () => {
    let component: CreatePackageComponent;
    let fixture: ComponentFixture<CreatePackageComponent>;

    let firebase: FirebaseService;
    const mockFirebase = {
        getDownloadUrl: jasmine.createSpy('getDownloadUrl'),
    };
    mockFirebase.getDownloadUrl.and.resolveTo('fakeUrl');

    let packagesService: PackagesService;
    const mockPackageService = {
        createPackage: jasmine.createSpy('createPackage'),
    };
    mockPackageService.createPackage.and.returnValue(of(packageMock));

    let location: Location;
    const mockLocation = {
        back: jasmine.createSpy('back'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreatePackageComponent],
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
                { provide: PackagesService, useValue: mockPackageService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePackageComponent);
        location = TestBed.inject(Location);
        firebase = TestBed.inject(FirebaseService);
        packagesService = TestBed.inject(PackagesService);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();

        const file = {
            target: {
                files: [{ name: 'testFile' }],
            },
        };

        component.handleFileInput(file);
        expect(component.fileToUpload).toEqual(file.target.files[0]);

        component.handleSubmit();
        expect(component.firebase.getDownloadUrl).toHaveBeenCalled();
    });
});
