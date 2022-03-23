import { SurfcampI } from './surfcamps.interfaces';

export interface PackageI {
    _id: string;
    surfcamp: SurfcampI;
    icon: string;
    description: string;
    days: number;
    price: number;
    name: string;
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
