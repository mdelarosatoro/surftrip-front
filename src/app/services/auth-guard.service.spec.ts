import { TestBed } from '@angular/core/testing';
import {
    ActivatedRouteSnapshot,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
    let service: AuthGuard;
    let mockSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot>(
        'RouterStateSnapshot',
        ['toString']
    );
    let router: Router;
    let mockRouter = {
        navigate: jasmine.createSpy('navigate'),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                { provide: AuthGuard },
                { provide: RouterStateSnapshot, useValue: mockSnapshot },
                { provide: Router, useValue: mockRouter },
            ],
        });
        service = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
        const route = new ActivatedRouteSnapshot();
        service.canActivate(route, mockSnapshot);
    });
});
describe('AuthGuardService', () => {
    let service: AuthGuard;
    let mockSnapshot: any = jasmine.createSpyObj<RouterStateSnapshot>(
        'RouterStateSnapshot',
        ['toString']
    );
    let router: Router;
    let mockRouter = {
        navigate: jasmine.createSpy('navigate'),
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                { provide: AuthGuard },
                { provide: RouterStateSnapshot, useValue: mockSnapshot },
                { provide: Router, useValue: mockRouter },
            ],
        });
        service = TestBed.inject(AuthGuard);
        router = TestBed.inject(Router);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();

        spyOn(localStorage, 'getItem').and.returnValue('');

        const route = new ActivatedRouteSnapshot();
        service.canActivate(route, mockSnapshot);
        expect(router.navigate).toHaveBeenCalled();
    });
});
