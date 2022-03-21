import { HttpClientModule } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { packageMock } from '../mocks/packages.mocks';
import { deletePhotoMock, newPhotoMock } from '../mocks/photos.mocks';
import {
    getSurfcampResponse,
    updatedSurfcampMock,
} from '../mocks/surfcamps.mocks';

import { SurfcampsService } from './surfcamps.service';

describe('SurfcampsService', () => {
    let service: SurfcampsService;
    let httpTestingController: HttpTestingController;
    const mockToken = 'token';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(SurfcampsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    describe('When getSurfcampPackages is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .getSurfcampPackages(idSurfcamp, idSurfcamp)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: `http://localhost:4500/surfcamps/${idSurfcamp}/packages`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/surfcamps/${idSurfcamp}/packages`
            );

            req.flush([packageMock]);
        });
    });
    describe('When getSurfcampById is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .getSurfcampById(mockToken, idSurfcamp)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: `http://localhost:4500/surfcamps/${idSurfcamp}`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/surfcamps/${idSurfcamp}`
            );

            req.flush(getSurfcampResponse);
        });
    });
    describe('When updateSurfcamp is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .updateSurfcamp(mockToken, idSurfcamp, updatedSurfcampMock)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'PATCH',
                url: `http://localhost:4500/surfcamps/${idSurfcamp}`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/surfcamps/${idSurfcamp}`
            );

            req.flush(getSurfcampResponse);
        });
    });
    describe('When addPhoto is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .addPhoto(mockToken, idSurfcamp, newPhotoMock)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'POST',
                url: `http://localhost:4500/surfcamps/${idSurfcamp}/photos`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/surfcamps/${idSurfcamp}/photos`
            );

            req.flush(getSurfcampResponse);
        });
    });
    describe('When deletePhoto is called', () => {
        it('httpClient should be called', () => {
            const idSurfcamp = '1';

            service
                .deletePhoto(mockToken, idSurfcamp, deletePhotoMock)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'PATCH',
                url: `http://localhost:4500/surfcamps/${idSurfcamp}/photos`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/surfcamps/${idSurfcamp}/photos`
            );

            req.flush(getSurfcampResponse);
        });
    });
});
