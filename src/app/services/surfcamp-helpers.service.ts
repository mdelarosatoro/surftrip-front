import { Injectable } from '@angular/core';
import {
    SurfcampI,
    SurfcampWithLocationI,
    SurfcampWithReviewScoreAndLocationI,
    SurfcampWithReviewScoreI,
} from '../interfaces/surfcamps.interfaces';
import {
    PackageI,
    PackageithReviewScoreI,
} from '../interfaces/packages.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SurfcampHelpersService {
    constructor() {}

    addSurfcampReviewData = (surfcamps: SurfcampI[]) => {
        const remodelledSurfcamps: SurfcampWithReviewScoreI[] = surfcamps.map(
            (surfcamp) => ({
                ...surfcamp,
                reviewScore: 0,
                starArr: [],
                emptyStarArr: [],
            })
        );
        remodelledSurfcamps.forEach((surfcamp) => {
            surfcamp.comments.forEach((comment) => {
                surfcamp.reviewScore = surfcamp.reviewScore + comment.rating;
            });
            surfcamp.reviewScore =
                surfcamp.comments.length !== 0
                    ? surfcamp.reviewScore / surfcamp.comments.length
                    : 0;
            surfcamp.starArr = Array(Math.floor(surfcamp.reviewScore)).fill(1);
            surfcamp.emptyStarArr = Array(
                5 - Math.floor(surfcamp.reviewScore)
            ).fill(1);
        });
        return remodelledSurfcamps;
    };

    addPackageReviewData = (packages: PackageI[]) => {
        const remodelledPackages: PackageithReviewScoreI[] = packages.map(
            (packageItem) => ({
                ...packageItem,
                surfcamp: {
                    ...packageItem.surfcamp,
                    reviewScore: 0,
                    starArr: [],
                    emptyStarArr: [],
                },
            })
        );
        remodelledPackages.forEach((packageItem) => {
            packageItem.surfcamp.starArr = Array(
                Math.floor(Number(packageItem.surfcamp.rating))
            ).fill(1);
            packageItem.surfcamp.emptyStarArr = Array(
                5 - Math.floor(Number(packageItem.surfcamp.rating))
            ).fill(1);
        });
        return remodelledPackages;
    };

    addLocationString = async (
        surfcamps: SurfcampWithReviewScoreI[]
    ): Promise<SurfcampWithReviewScoreAndLocationI[]> => {
        return Promise.all(
            surfcamps.map(async (item: SurfcampWithReviewScoreI) => {
                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${item.location[0]},${item.location[1]}.json?types=country&access_token=${environment.mapBoxToken}`
                );
                const data = await response.json();
                return {
                    ...item,
                    locationString: data.features[0].place_name,
                };
            })
        );
    };

    addLocationStringToPackages = async (
        packages: PackageithReviewScoreI[]
    ) => {
        return Promise.all(
            packages.map(async (item: PackageithReviewScoreI) => {
                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${item.surfcamp.location[0]},${item.surfcamp.location[1]}.json?types=country&access_token=${environment.mapBoxToken}`
                );
                const data = await response.json();
                return {
                    ...item,
                    surfcamp: {
                        ...item.surfcamp,
                        locationString: data.features[0].place_name,
                    },
                };
            })
        );
    };

    addLocationStringToSurfcamp = async (
        surfcamp: SurfcampI
    ): Promise<SurfcampWithLocationI> => {
        const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${surfcamp.location[0]},${surfcamp.location[1]}.json?types=country&access_token=${environment.mapBoxToken}`
        );
        const data = await response.json();
        return {
            ...surfcamp,
            locationString: data.features[0].place_name,
        };
    };
}
