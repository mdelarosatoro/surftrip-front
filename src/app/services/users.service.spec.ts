import { HttpClientModule } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockUser } from '../mocks/users.mocks';

import { UsersService } from './users.service';

describe('UsersService', () => {
    let service: UsersService;
    let httpTestingController: HttpTestingController;
    const mockToken = 'token';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UsersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    describe('When getAll is called', () => {
        it('httpClient should be called', () => {
            service.getAll(mockToken).subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: `http://localhost:4500/users/`,
            });

            expect(req.request.url).toBe(`http://localhost:4500/users/`);

            req.flush([mockUser]);
        });
    });
    describe('When getUserById is called', () => {
        it('httpClient should be called', () => {
            const userId = '1';

            service
                .getUserById(mockToken, userId)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: `http://localhost:4500/users/${userId}`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/users/${userId}`
            );

            req.flush(mockUser);
        });
    });
    describe('When updateUser is called', () => {
        it('httpClient should be called', () => {
            const userId = '1';
            const newUserData = {
                name: '',
                lastName: '',
                email: '',
            };

            service
                .updateUser(mockToken, userId, newUserData)
                .subscribe((response: any) => {});

            const req = httpTestingController.expectOne({
                method: 'PATCH',
                url: `http://localhost:4500/users/${userId}`,
            });

            expect(req.request.url).toBe(
                `http://localhost:4500/users/${userId}`
            );

            req.flush(mockUser);
        });
    });
});
