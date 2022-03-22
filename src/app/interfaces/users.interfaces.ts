export interface UserI {
    _id: string;
    bookings: string[];
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
    role: string;
}
