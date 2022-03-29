import {
    SurfcampI,
    SurfcampWithReviewScoreI,
} from '../interfaces/surfcamps.interfaces';
import {
    PackageI,
    PackageithReviewScoreI,
} from '../interfaces/packages.interfaces';
import { environment } from 'src/environments/environment';

export const addSurfcampReviewData = (surfcamps: SurfcampI[]) => {
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

export const addPackageReviewData = (packages: PackageI[]) => {
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
