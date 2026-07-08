export interface RatingPoint {

  timestamp:string;

  rating:number;

}


export interface RatingHistory {

  playerId:string;

  mode:string;

  points:RatingPoint[];

}
