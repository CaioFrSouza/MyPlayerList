export interface IImageSlider {
    overview: string,
    vote_average: number,
    poster_path: string,
    id: number,
}

export interface ISlider {
    item: IImageSlider,
    index: number,
    baseRouter:string,
}