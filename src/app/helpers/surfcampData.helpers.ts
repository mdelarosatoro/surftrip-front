import {
    SurfcampI,
    SurfcampWithReviewScoreI,
} from '../interfaces/surfcamps.interfaces';

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
        surfcamp.starArr = Array(surfcamp.reviewScore).fill(1);
        surfcamp.emptyStarArr = Array(5 - surfcamp.reviewScore).fill(1);
    });
    return remodelledSurfcamps;
};
