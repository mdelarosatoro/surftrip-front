import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { AuthService } from './auth.service';

const mockLoginSurfcampResponse: any = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzBkZWQwYjRiYjRiNzE2YTNkMTE2MyIsIm5hbWUiOiJ0ZXN0MSIsInVzZXJuYW1lIjoidGVzdDEiLCJyb2xlIjoic3VyZmNhbXAiLCJpYXQiOjE2NDc2MDY4NTF9.unyOCEWPGuv4gG672Y7qTS8grXm_6rlIOjC-H2kmQXk',
    id: '6230ded0b4bb4b716a3d1163',
    name: 'test1',
    username: 'test1',
    role: 'surfcamp',
};

describe('AuthService', () => {
    let service: AuthService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(AuthService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('When loginToken is called', () => {
        it('httpClient should be called', () => {
            service.loginToken('token').subscribe((response: any) => {
                expect(response).not.toBe(null);
                expect(JSON.stringify(response)).toEqual(
                    JSON.stringify(mockLoginSurfcampResponse)
                );
            });

            const req = httpTestingController.expectOne({
                method: 'GET',
                url: 'http://localhost:4500/auth/login-token',
            });

            expect(req.request.url).toBe(
                'http://localhost:4500/auth/login-token'
            );

            req.flush(mockLoginSurfcampResponse);
        });
    });
    describe('When loginSurfcamp is called', () => {
        it('httpClient should be called', () => {
            const login = {
                username: 'test',
                password: 'test',
            };
            service.loginSurfcamp(login).subscribe((response: any) => {
                expect(response).not.toBe(null);
                expect(JSON.stringify(response)).toEqual(
                    JSON.stringify(mockLoginSurfcampResponse)
                );
            });

            const req = httpTestingController.expectOne({
                method: 'POST',
                url: 'http://localhost:4500/auth/surfcamps/login',
            });

            expect(req.request.url).toBe(
                'http://localhost:4500/auth/surfcamps/login'
            );

            req.flush(mockLoginSurfcampResponse);
        });
    });
    describe('When registerSurfcamp is called', () => {
        it('httpClient should be called', () => {
            const registerSurfcamp = {
                email: '',
                username: '',
                password: '',
                name: '',
                description: '',
                location: '',
                skillLevels: [],
            };
            service
                .registerSurfcamp(registerSurfcamp)
                .subscribe((response: any) => {
                    expect(response).not.toBe(null);
                    expect(JSON.stringify(response)).toEqual(
                        JSON.stringify(mockLoginSurfcampResponse)
                    );
                });

            const req = httpTestingController.expectOne({
                method: 'POST',
                url: 'http://localhost:4500/auth/surfcamps/register',
            });

            expect(req.request.url).toBe(
                'http://localhost:4500/auth/surfcamps/register'
            );

            req.flush(mockLoginSurfcampResponse);
        });
    });
});
