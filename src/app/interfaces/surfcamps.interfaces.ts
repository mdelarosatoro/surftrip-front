import { PackageI } from './packages.interfaces';
import { PhotoI } from './photos.interfaces';
import { UserI } from './users.interfaces';

export interface CreateSurfcampI {
    email: string;
    username: string;
    password: string;
    name: string;
    description: string;
    location: string;
    skillLevels: string[];
}

export interface SurfcampI {
    _id: string;
    email: string;
    username?: string;
    name: string;
    rating: string | number;
    packages?: PackageI[];
    role?: string;
    photos: PhotoI[];
    skillLevels: string[];
    location: number[];
    description: string;
    comments: CommentsI[];
    customers?: CustomersI[];
}

export interface SurfcampFilteredDataI {
    _id: string;
    email: string;
    name: string;
    rating: string | number;
    photos: PhotoI[];
    skillLevels: string[];
    location: number[];
    description: string;
    comments: CommentsI[];
}

export interface SurfcampWithReviewScoreI {
    _id: string;
    email: string;
    username?: string;
    name: string;
    rating: number | string;
    packages?: PackageI[];
    role?: string;
    photos: PhotoI[];
    skillLevels: string[];
    location: number[];
    description: string;
    comments: CommentsI[];
    customers?: CustomersI[];
    reviewScore: number;
    starArr: number[];
    emptyStarArr: number[];
}

export interface CommentsI {
    user: string;
    comment: string;
    rating: number;
    _id: string;
}

export interface CommentsPopulatedMI {
    user: {
        _id: string;
        name: string;
        lastName: string;
        profilePicUrl: string;
    };
    comment: string;
    rating: number;
    _id: string;
}

export interface CommentsPopulatedMStarsI {
    user: {
        _id: string;
        name: string;
        lastName: string;
        profilePicUrl: string;
    };
    comment: string;
    rating: number;
    _id: string;
    starArr: number[];
    emptyStarArr: number[];
}

export interface CommentsPopulatedI {
    user: UserI;
    comment: string;
    rating: number;
    _id: string;
    starArr: number[];
    emptyStarArr: number[];
}

export interface AddCommentI {
    comment: string;
    rating: number;
}

export interface CustomersI {
    _id: string;
    user: string;
    package: string;
    bookedAt: string;
}

export interface SurfcampLoginI {
    username: string;
    password: string;
}
export interface SurfcampLogoutI {
    username: string;
    password: string;
}

export interface SurfcampLoginResponseI {
    token: string;
    id: string;
    name: string;
    username: string;
    role: string;
}

export interface SurfcampLoginTokenResponseI {
    id: string;
    name: string;
    username: string;
    role: string;
}

export interface UpdatedSurfcampI {
    name: string;
    location: string;
    skillLevels: string[];
    description: string;
}

export interface SurfcampQueryI {
    skillBeginner: boolean;
    skillIntermediate: boolean;
    skillAdvanced: boolean;
    skillExpert: boolean;
    rating: number;
    location: string;
}
