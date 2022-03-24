import { HttpClientModule } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { packageMock, updatedPackageMock } from '../mocks/packages.mocks';

import { PackagesService } from './packages.service';

describe('PackagesService', () => {
    let service: PackagesService;
    let httpTestingController: HttpTestingController;
    const mockToken = 'token';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(PackagesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    describe('When getPackageById is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .getPackageById(mockToken, idSurfcamp)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: 'http://localhost:4500/packages/1',
            });

            expect(req.request.url).toBe('http://localhost:4500/packages/1');

            req.flush(packageMock);
        });
    });
    describe('When updatePackage is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .updatePackage(mockToken, idSurfcamp, updatedPackageMock)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'PUT',
                url: 'http://localhost:4500/packages/1',
            });

            expect(req.request.url).toBe('http://localhost:4500/packages/1');

            req.flush(packageMock);
        });
    });
});
