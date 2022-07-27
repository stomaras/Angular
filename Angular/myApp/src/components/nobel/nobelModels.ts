export interface Nobel{
    prizes:Prize[];
}

export interface Prize{
    year:(string | number);
    category:string;
    laureates?:Array<Laurate>;
    overallMotivation?:string
}

export interface Laurate{
    id:(string | number)
    firstname:string
    surname?:string
    motivation:string
    share:string
}