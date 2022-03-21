import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SurfcampsService } from './surfcamps.service';

describe('SurfcampsService', () => {
    let service: SurfcampsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(SurfcampsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
