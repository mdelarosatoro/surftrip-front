import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
    faPencilAlt,
    faSave,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { UsersService } from 'src/app/services/users.service';
import { updateUserData } from 'src/app/state/auth/auth.actions';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
    faSave = faSave;
    faPencilAlt = faPencilAlt;
    faTimesCircle = faTimesCircle;
    auth!: UserLoginResponseI;
    editMode: boolean;
    editUserForm: FormGroup;

    constructor(
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public fb: FormBuilder,
        public usersService: UsersService
    ) {
        this.editMode = false;
        this.editUserForm = this.fb.group({
            name: ['', []],
            lastName: ['', []],
            email: ['', []],
        });
    }

    ngOnInit(): void {
        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.editUserForm.setValue({
                    name: this.auth.name,
                    lastName: this.auth.lastName,
                    email: this.auth.email,
                });
            });
    }

    toggleEditMode() {
        this.editMode = !this.editMode;
    }

    updateUser() {
        this.usersService
            .updateUser(this.auth.token, this.auth.id, this.editUserForm.value)
            .subscribe((resp) => {
                this.store.dispatch(updateUserData({ newUserData: resp.user }));
                localStorage.setItem('token', resp.token);
                this.toggleEditMode();
            });
    }
}
