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
    describe('When createPackage is called', () => {
        it('httpClient should be called', () => {
            const idPackage = '1';
            const newPackage = {
                name: '',
                price: 0,
                description: '',
                days: 0,
                icon: '',
            };
            service
                .createPackage(mockToken, newPackage)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'POST',
                url: 'http://localhost:4500/packages/',
            });

            expect(req.request.url).toBe('http://localhost:4500/packages/');

            req.flush({ message: 'ok' });
        });
    });
    describe('When getAllPackages is called', () => {
        it('httpClient should be called', () => {
            service.getAllPackages(mockToken).subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: 'http://localhost:4500/packages/',
            });

            expect(req.request.url).toBe('http://localhost:4500/packages/');

            req.flush([packageMock]);
        });
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
    describe('When bookPackage is called', () => {
        it('httpClient should be called', () => {
            const idPackage = '1';

            service
                .bookPackage(mockToken, idPackage)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: 'http://localhost:4500/packages/1/book',
            });

            expect(req.request.url).toBe(
                'http://localhost:4500/packages/1/book'
            );

            req.flush({ message: 'ok' });
        });
    });
    describe('When search is called', () => {
        it('httpClient should be called', () => {
            const query = {
                skillBeginner: true,
                skillIntermediate: true,
                skillAdvanced: true,
                skillExpert: true,
                rating: 0,
                location: '',
                price: 0,
                days: 0,
            };

            const queryString = `days=${query.days}&price=${query.price}&location=${query.location}&rating=${query.rating}&skillBeginner=${query.skillBeginner}&skillIntermediate=${query.skillIntermediate}&skillAdvanced=${query.skillAdvanced}&skillExpert=${query.skillExpert}`;

            service.search(mockToken, query).subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: `http://localhost:4500/packages/search?${queryString}`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/packages/search?${queryString}`
            );

            req.flush([packageMock]);
        });
    });
    describe('When deletePackage is called', () => {
        it('httpClient should be called', () => {
            const idPackage = '1';

            service
                .deletePackage(mockToken, idPackage)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'DELETE',
                url: 'http://localhost:4500/packages/1',
            });

            expect(req.request.url).toBe('http://localhost:4500/packages/1');

            req.flush({ message: 'ok' });
        });
    });
});
