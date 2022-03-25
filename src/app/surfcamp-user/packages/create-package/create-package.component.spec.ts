import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { CoreModule } from 'src/app/core/core.module';
import { getSurfcampResponse } from 'src/app/mocks/surfcamps.mocks';

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

    let location: Location;
    const mockService = {
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
                // { provide: ActivatedRoute, useValue: routeStub },
                // { provide: PackagesService, useValue: mockService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreatePackageComponent);
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
    });
});
