import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    mapbox = mapboxgl as typeof mapboxgl;
    geocoder: any;
    map: mapboxgl.Map;
    style = `mapbox://styles/mapbox/streets-v11`;
    // Coordenadas de la localización donde queremos centrar el mapa
    lat = 43.1746;
    lng = -2.4125;
    zoom = 0;
    constructor() {
        // Asignamos el token desde las variables de entorno
        this.mapbox.accessToken = environment.mapBoxToken;
        this.map = {} as unknown as mapboxgl.Map;
    }
    buildMap() {
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
    }
}
