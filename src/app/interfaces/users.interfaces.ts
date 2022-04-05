import { BookingsI, PackageI } from './packages.interfaces';

export interface UserI {
    _id: string;
    bookings: BookingsI[];
    role: string;
    profilePicUrl: string;
    lastName: string;
    name: string;
    username: string;
    email: string;
}

export interface CreateUserI {
    name: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export interface UserLoginI {
    username: string;
    password: string;
}

export interface UserLoginResponseI {
    token: string;
    id: string;
    username?: string;
    name: string;
    email?: string;
    lastName: string;
    profilePicUrl?: string;
    role: string;
}

export interface UpdateUserI {
    name: string;
    lastName: string;
    email: string;
    profilePicUrl?: string;
}

export interface UpdateUserResponseI {
    user: UserI;
    token: string;
}
