import { TestBed } from '@angular/core/testing';
import { SurfcampI } from '../interfaces/surfcamps.interfaces';
import { packageMock } from '../mocks/packages.mocks';
import { getSurfcampResponse } from '../mocks/surfcamps.mocks';

import { SurfcampHelpersService } from './surfcamp-helpers.service';

describe('SurfcampHelpersService', () => {
    let service: SurfcampHelpersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SurfcampHelpersService);
    });

    it('When calling addSurfcampReviewData it should return the expected Result', () => {
        expect(service).toBeTruthy();

        const expectedResult = [
            {
                _id: '6230ded0b4bb4b716a3d1163',
                rating: 0,
                packages: [
                    {
                        _id: '6230dedcb4bb4b716a3d1167',
                        icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                        description: 'blalbablablalbablablalbabla',
                        days: 5,
                        price: 499,
                        name: '5 days all included',
                        surfcamp: {} as SurfcampI,
                    },
                ],
                role: 'surfcamp',
                photos: [
                    {
                        photoUrl:
                            'https://www.surfindonesia.com/wp-content/uploads/2019/08/rifles-surf-mentawais.jpg',
                        description:
                            'Rifles: One of our prime spots and one of the best rights in the planet.',
                        _id: '6237362d376affc52ca3abdc',
                    },
                ],
                skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
                location: [1, 2],
                name: 'Clara Camp',
                username: 'test1',
                email: 'test1@test.com',
                comments: [
                    {
                        user: '6230dee9b4bb4b716a3d116a',
                        comment: 'Very nice',
                        rating: 3,
                        _id: '6231c1d89f67d5fca6ba1c8d',
                    },
                ],
                customers: [
                    {
                        bookedAt: '1234',
                        user: '6230dee9b4bb4b716a3d116a',
                        package: '6230dedcb4bb4b716a3d1167',
                        _id: '6230defab4bb4b716a3d1173',
                    },
                ],
                description: 'solo para c lara',
                reviewScore: 3,
                starArr: [1, 1, 1],
                emptyStarArr: [1, 1],
            },
        ];

        const result = service.addSurfcampReviewData([getSurfcampResponse]);

        expect(result).toEqual(expectedResult);
    });
    it('When calling addPackageReviewData it should return the expected Result', () => {
        expect(service).toBeTruthy();

        const expectedResult = [
            {
                _id: '6230dedcb4bb4b716a3d1167',
                surfcamp: {
                    _id: '6230ded0b4bb4b716a3d1163',
                    rating: 0,
                    photos: [
                        {
                            photoUrl:
                                'https://www.perfectwavetravel.com/wp-content/uploads/2019/12/kandui-villas-11.jpg',
                            description:
                                'Kandui Villas: The best surfcamp on Earth',
                            _id: '62373376376affc52ca3aba3',
                        },
                    ],
                    skillLevels: [
                        'Beginner',
                        'Intermediate',
                        'Advanced',
                        'Expert',
                    ],
                    location: [1, 2],
                    name: 'Clara Camp',
                    email: 'test1@test.com',
                    comments: [
                        {
                            user: '6230dee9b4bb4b716a3d116a',
                            comment: 'Very nice',
                            rating: 3,
                            _id: '6231c1d89f67d5fca6ba1c8d',
                        },
                    ],
                    description: 'solo para c lara',
                    reviewScore: 0,
                    starArr: [],
                    emptyStarArr: [1, 1, 1, 1, 1],
                },
                icon: 'https://cdn-icons-png.flaticon.com/512/157/157796.png',
                description:
                    'blalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbabla',
                days: 10,
                price: 700,
                name: 'test',
            },
        ];
        const result = service.addPackageReviewData([packageMock]);

        expect(result).toEqual(expectedResult);
    });
    it('When calling addPackageReviewData it should return the expected Result', () => {
        expect(service).toBeTruthy();

        const mockSurfcampWithReviewScore = {
            _id: '6230ded0b4bb4b716a3d1163',
            rating: 0,
            packages: [
                {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                    surfcamp: {} as SurfcampI,
                },
            ],
            role: 'surfcamp',
            photos: [
                {
                    photoUrl:
                        'https://www.surfindonesia.com/wp-content/uploads/2019/08/rifles-surf-mentawais.jpg',
                    description:
                        'Rifles: One of our prime spots and one of the best rights in the planet.',
                    _id: '6237362d376affc52ca3abdc',
                },
            ],
            skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            location: [-9.371351359722212, 39.360031662513734],
            name: 'Clara Camp',
            username: 'test1',
            email: 'test1@test.com',
            comments: [
                {
                    user: '6230dee9b4bb4b716a3d116a',
                    comment: 'Very nice',
                    rating: 3,
                    _id: '6231c1d89f67d5fca6ba1c8d',
                },
            ],
            customers: [
                {
                    bookedAt: '1234',
                    user: '6230dee9b4bb4b716a3d116a',
                    package: '6230dedcb4bb4b716a3d1167',
                    _id: '6230defab4bb4b716a3d1173',
                },
            ],
            description: 'solo para c lara',
            reviewScore: 3,
            starArr: [1, 1, 1],
            emptyStarArr: [1, 1],
        };

        const result = service.addLocationString([mockSurfcampWithReviewScore]);
    });
    it('When calling addPackageReviewData it should return the expected Result', () => {
        expect(service).toBeTruthy();

        const mockSurfcampWithReviewScore = {
            _id: '6230ded0b4bb4b716a3d1163',
            rating: 0,
            packages: [
                {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                    surfcamp: {} as SurfcampI,
                },
            ],
            role: 'surfcamp',
            photos: [
                {
                    photoUrl:
                        'https://www.surfindonesia.com/wp-content/uploads/2019/08/rifles-surf-mentawais.jpg',
                    description:
                        'Rifles: One of our prime spots and one of the best rights in the planet.',
                    _id: '6237362d376affc52ca3abdc',
                },
            ],
            skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            location: [-9.371351359722212, 39.360031662513734],
            name: 'Clara Camp',
            username: 'test1',
            email: 'test1@test.com',
            comments: [
                {
                    user: '6230dee9b4bb4b716a3d116a',
                    comment: 'Very nice',
                    rating: 3,
                    _id: '6231c1d89f67d5fca6ba1c8d',
                },
            ],
            customers: [
                {
                    bookedAt: '1234',
                    user: '6230dee9b4bb4b716a3d116a',
                    package: '6230dedcb4bb4b716a3d1167',
                    _id: '6230defab4bb4b716a3d1173',
                },
            ],
            description: 'solo para c lara',
            reviewScore: 3,
            starArr: [1, 1, 1],
            emptyStarArr: [1, 1],
        };

        const mockPackageWithCoordinates = {
            _id: '6230dedcb4bb4b716a3d1167',
            surfcamp: mockSurfcampWithReviewScore,
            icon: 'https://cdn-icons-png.flaticon.com/512/157/157796.png',
            description:
                'blalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbabla',
            days: 10,
            price: 700,
            name: 'test',
        };

        const result = service.addLocationStringToPackages([
            mockPackageWithCoordinates,
        ]);
    });
    it('When calling addPackageReviewData it should return the expected Result', () => {
        expect(service).toBeTruthy();

        const mockSurfcampWithReviewScore = {
            _id: '6230ded0b4bb4b716a3d1163',
            rating: 0,
            packages: [
                {
                    _id: '6230dedcb4bb4b716a3d1167',
                    icon: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/surfing-vintage-retro-surfer-circle-icon-kevin-garbes.jpg',
                    description: 'blalbablablalbablablalbabla',
                    days: 5,
                    price: 499,
                    name: '5 days all included',
                    surfcamp: {} as SurfcampI,
                },
            ],
            role: 'surfcamp',
            photos: [
                {
                    photoUrl:
                        'https://www.surfindonesia.com/wp-content/uploads/2019/08/rifles-surf-mentawais.jpg',
                    description:
                        'Rifles: One of our prime spots and one of the best rights in the planet.',
                    _id: '6237362d376affc52ca3abdc',
                },
            ],
            skillLevels: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
            location: [-9.371351359722212, 39.360031662513734],
            name: 'Clara Camp',
            username: 'test1',
            email: 'test1@test.com',
            comments: [
                {
                    user: '6230dee9b4bb4b716a3d116a',
                    comment: 'Very nice',
                    rating: 3,
                    _id: '6231c1d89f67d5fca6ba1c8d',
                },
            ],
            customers: [
                {
                    bookedAt: '1234',
                    user: '6230dee9b4bb4b716a3d116a',
                    package: '6230dedcb4bb4b716a3d1167',
                    _id: '6230defab4bb4b716a3d1173',
                },
            ],
            description: 'solo para c lara',
            reviewScore: 3,
            starArr: [1, 1, 1],
            emptyStarArr: [1, 1],
        };

        const result = service.addLocationStringToSurfcamp(
            mockSurfcampWithReviewScore
        );
    });
});
