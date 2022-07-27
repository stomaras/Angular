export interface IMovie{
    title:string;
    photoUrl:string;
    productionDate:Date;
    rating:number;
    price:number;
    duration:number;
    color:string;

    director : IDirector;
    actors: Array<IActor>;
    genres: Array<IGenre>;
}

export interface IDirector{
    firstName:string;
    lastName:string;
}

export interface IActor{
    firstName:string;
    lastName:string;
}

export interface IGenre{
    kind:string;
}

export enum SortOptions{
    titleAsc="titleAsc",
    titleDesc="titleDesc",
    yearAsc="yearAsc",
    yearDesc="yearDesc"
}