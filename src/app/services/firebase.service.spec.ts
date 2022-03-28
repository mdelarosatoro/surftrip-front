import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
    let service: FirebaseService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FirebaseService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();

        var file = new File([] as BlobPart[], 'test-file.jpg', {
            lastModified: 1234,
            type: 'image/jpeg',
        });
        const e = {
            target: {
                files: [file],
            },
        };

        service.getDownloadUrl(file);
    });
});
