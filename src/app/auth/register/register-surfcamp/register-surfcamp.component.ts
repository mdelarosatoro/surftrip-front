import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
@Component({
    selector: 'app-register-surfcamp',
    templateUrl: './register-surfcamp.component.html',
    styleUrls: ['./register-surfcamp.component.scss'],
})
export class RegisterSurfcampComponent implements OnInit {
    registerSurfcampForm: FormGroup;
    registrationError: boolean;
    mapbox = mapboxgl as typeof mapboxgl;
    geocoder: any;
    map: mapboxgl.Map;
    style = `mapbox://styles/mapbox/streets-v11`;
    // Coordenadas de la localización donde queremos centrar el mapa
    lat = 43.1746;
    lng = -2.4125;
    zoom = 0;
    constructor(
        public fb: FormBuilder,
        public authService: AuthService,
        public router: Router
    ) {
        this.registerSurfcampForm = fb.group({
            name: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            longitude: new FormControl('', [Validators.required]),
            latitude: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            username: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            confirmPassword: new FormControl('', [Validators.required]),
            beginner: [false, []],
            intermediate: [false, []],
            advanced: [false, []],
            expert: [false, []],
            description: ['', []],
        });
        this.registrationError = false;
        this.mapbox.accessToken = environment.mapBoxToken;
        this.map = {} as unknown as mapboxgl.Map;
    }

    ngOnInit(): void {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat],
        });
        this.geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: this.map,
        });
        document
            .getElementById('geocoder')!
            .appendChild(this.geocoder.onAdd(this.map));
        this.map.on('style.load', () => {
            this.map.on('click', (e: any) => {
                var coordinates = e.lngLat;
                console.log(coordinates);
                this.registerSurfcampForm.setValue({
                    ...this.registerSurfcampForm.value,
                    longitude: coordinates.lng,
                    latitude: coordinates.lat,
                });
                new mapboxgl.Popup()
                    .setLngLat(coordinates)
                    .setHTML('you clicked here: <br/>' + coordinates)
                    .addTo(this.map);
            });
        });
    }

    handleSubmit(): void {
        const payload = {
            ...this.registerSurfcampForm.value,
            skillLevels: [],
            location: [
                this.registerSurfcampForm.value.longitude,
                this.registerSurfcampForm.value.latitude,
            ],
        };
        this.registerSurfcampForm.value.beginner &&
            payload.skillLevels.push('Beginner');
        this.registerSurfcampForm.value.intermediate &&
            payload.skillLevels.push('Intermediate');
        this.registerSurfcampForm.value.advanced &&
            payload.skillLevels.push('Advanced');
        this.registerSurfcampForm.value.expert &&
            payload.skillLevels.push('Expert');
        this.authService.registerSurfcamp(payload).subscribe({
            next: (resp) => {
                if (resp._id) {
                    console.log('Registration success');
                    this.router.navigateByUrl('/login');
                }
            },
            error: (error) => {
                this.registrationError = true;
            },
        });
    }

    get name() {
        return this.registerSurfcampForm.get('name');
    }
    get longitude() {
        return this.registerSurfcampForm.get('longitude');
    }
    get latitude() {
        return this.registerSurfcampForm.get('latitude');
    }
    get email() {
        return this.registerSurfcampForm.get('email');
    }
    get username() {
        return this.registerSurfcampForm.get('username');
    }
    get password() {
        return this.registerSurfcampForm.get('password');
    }
    get confirmPassword() {
        return this.registerSurfcampForm.get('confirmPassword');
    }
    get beginner() {
        return this.registerSurfcampForm.get('beginner');
    }
    get intermediate() {
        return this.registerSurfcampForm.get('intermediate');
    }
    get advanced() {
        return this.registerSurfcampForm.get('advanced');
    }
    get expert() {
        return this.registerSurfcampForm.get('expert');
    }
}
