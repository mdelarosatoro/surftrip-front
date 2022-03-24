import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { PackagesService } from 'src/app/services/packages.service';
import { SurfcampsService } from 'src/app/services/surfcamps.service';

@Component({
    selector: 'app-surfcamp-packages',
    templateUrl: './surfcamp-packages.component.html',
    styleUrls: [],
})
export class SurfcampPackagesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
