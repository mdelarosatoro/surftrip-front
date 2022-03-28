import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Store } from '@ngrx/store';
import { UserLoginResponseI } from 'src/app/interfaces/users.interfaces';
import { SurfcampsService } from 'src/app/services/surfcamps.service';
import { Router } from '@angular/router';
import { SurfcampI } from 'src/app/interfaces/surfcamps.interfaces';

@Component({
    selector: 'app-world-map',
    templateUrl: './world-map.component.html',
    styleUrls: ['./world-map.component.scss'],
})
export class WorldMapComponent implements OnInit {
    mapbox = mapboxgl as typeof mapboxgl;
    geocoder: any;
    map: mapboxgl.Map;
    style = `mapbox://styles/mapbox/streets-v11`;
    // Coordenadas de la localización donde queremos centrar el mapa
    lat = 43.1746;
    lng = -2.4125;
    zoom = 0;
    auth!: UserLoginResponseI;
    surfcamps!: SurfcampI[];
    constructor(
        private store: Store<{
            auth: UserLoginResponseI;
        }>,
        public surfampsService: SurfcampsService,
        public router: Router
    ) {
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

        this.store
            .select((store) => ({ auth: store.auth }))
            .subscribe((data) => {
                this.auth = data.auth;
                this.surfampsService
                    .getAllSurfcamps(this.auth.token)
                    .subscribe((resp) => {
                        this.surfcamps = resp;
                        console.log(resp);
                        this.surfcamps.forEach((item) => {
                            const popup = new mapboxgl.Popup().setHTML(
                                `<a href="/surfcamp-details/${item._id}">${item.name}</a>`
                            );
                            const marker = new mapboxgl.Marker()
                                .setLngLat([item.location[0], item.location[1]])
                                .setPopup(popup)
                                .addTo(this.map);
                        });
                    });
            });
    }
}
