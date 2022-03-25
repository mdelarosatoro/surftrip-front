import {
    SurfcampFilteredDataI,
    SurfcampI,
    SurfcampWithReviewScoreI,
} from './surfcamps.interfaces';

export interface PackageI {
    _id: string;
    surfcamp: SurfcampI;
    icon: string;
    description: string;
    days: number;
    price: number;
    name: string;
}

export interface CreatePackageI {
    name: string;
    price: number;
    days: number;
    description: string;
    icon: string;
}

export interface UpdatedPackageI {
    name: string;
    price: number;
    days: number;
    description: string;
}

export interface BookingsI {
    package: PackageI;
    bookedAt: string;
}

export interface PackageQueryI {
    skillBeginner: boolean;
    skillIntermediate: boolean;
    skillAdvanced: boolean;
    skillExpert: boolean;
    rating: number;
    location: string;
    price: number;
    days: number;
}

export interface PackageithReviewScoreI {
    _id: string;
    surfcamp: SurfcampWithReviewScoreI;
    icon: string;
    description: string;
    days: number;
    price: number;
    name: string;
}
