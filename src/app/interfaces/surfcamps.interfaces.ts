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
    username: string;
    name: string;
    rating: string;
    packages: string[];
    role: string;
    photos: string[];
    skillLevels: string[];
    location: string;
    description: string;
    comments: CommentsI[];
    customers: string[];
}

export interface CommentsI {
    user: string;
    comment: string;
    rating: number;
    _id: string;
}

export interface CustomersI {
    _id: string;
    user: string;
    package: string;
}
