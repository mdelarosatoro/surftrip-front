import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
    let service: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [{ provide: AuthGuard }],
        });
        service = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
