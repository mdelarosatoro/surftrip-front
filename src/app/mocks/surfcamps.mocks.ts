import { SurfcampI } from '../interfaces/surfcamps.interfaces';
import { mockUser } from './users.mocks';

export const getSurfcampResponse = {
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
    location: 'testino',
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
            user: '6230dee9b4bb4b716a3d116a',
            package: '6230dedcb4bb4b716a3d1167',
            _id: '6230defab4bb4b716a3d1173',
        },
    ],
    description: 'solo para c lara',
};

export const updatedSurfcampMock = {
    name: '',
    location: '',
    skillLevels: [],
    description: '',
};

export const mockLoginSurfcampResponse = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzBkZWQwYjRiYjRiNzE2YTNkMTE2MyIsIm5hbWUiOiJDbGFyYSBDYW1wIiwidXNlcm5hbWUiOiJ0ZXN0MSIsInJvbGUiOiJzdXJmY2FtcCIsImlhdCI6MTY0NzkzODg5Mn0.KFpCOei2YPmswZ7S3IdF9_BW28Xuo8EdzoLsN2SuLjs',
    id: '6230ded0b4bb4b716a3d1163',
    name: 'Clara Camp',
    username: 'test1',
    role: 'surfcamp',
};

export const mockSurfcampPopulatedComments = {
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
    location: 'testino',
    name: 'Clara Camp',
    username: 'test1',
    email: 'test1@test.com',
    comments: [
        {
            user: mockUser,
            comment: 'Very nice',
            rating: 3,
            _id: '6231c1d89f67d5fca6ba1c8d',
        },
    ],
    customers: [
        {
            user: '6230dee9b4bb4b716a3d116a',
            package: '6230dedcb4bb4b716a3d1167',
            _id: '6230defab4bb4b716a3d1173',
        },
    ],
    description: 'solo para c lara',
};
