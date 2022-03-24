export const mockUser = {
    _id: '6230dee9b4bb4b716a3d116a',
    bookings: [
        {
            package: {
                _id: '6230dedcb4bb4b716a3d1167',
                surfcamp: '6230ded0b4bb4b716a3d1163',
                icon: 'https://cdn-icons-png.flaticon.com/512/157/157796.png',
                description:
                    'blalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbablablalbabla',
                days: 10,
                price: 700,
                name: '10 nights FREEEEEESHHHisne',
            },
            bookedAt: '2022-03-23T14:55:39.373Z',
            _id: '623b34eb6ea9a370925d9e2a',
        },
    ],
    role: 'user',
    lastName: 'testingtimes',
    name: 'testingtimes',
    username: 'test1',
    email: 'testingtimes@testingtimes.com',
    profilePicUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg',
};

export const mockUserLoginResponse = {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzBkZWU5YjRiYjRiNzE2YTNkMTE2YSIsIm5hbWUiOiJ0ZXN0aW5ndGltZXMiLCJsYXN0TmFtZSI6InRlc3Rpbmd0aW1lcyIsImVtYWlsIjoidGVzdGluZ3RpbWVzQHRlc3Rpbmd0aW1lcy5jb20iLCJwcm9maWxlUGljVXJsIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzVmL0FsYmVydG9fY29udmVyc2lfcHJvZmlsZV9waWMuanBnIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NDgxMTA3MTd9.UjK1DYfyJn2fzFJ2eG-h1Fv6Szln_9GVPaNTeVByNlg',
    id: '6230dee9b4bb4b716a3d116a',
    name: 'testingtimes',
    lastName: 'testingtimes',
    email: 'testingtimes@testingtimes.com',
    profilePicUrl:
        'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg',
    role: 'user',
};

export const mockRegisterUser = {
    name: 'test',
    lastName: 'test',
    email: 'test',
    username: 'test',
    password: 'test',
};
