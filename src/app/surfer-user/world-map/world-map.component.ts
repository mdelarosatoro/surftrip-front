import { Component, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

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
    constructor() {
        this.mapbox.accessToken = environment.mapBoxToken;
        this.map = {} as unknown as mapboxgl.Map;
    }

    ngOnInit(): void {
        // this.map.buildMap();
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat],
        });
        // this.map.addControl(new mapboxgl.NavigationControl());
        this.geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: this.map,
        });
        document
            .getElementById('geocoder')!
            .appendChild(this.geocoder.onAdd(this.map));
    }
}
