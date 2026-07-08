export interface EloPoint {

  date:string;

  rating:number;

  result?:
    | "win"
    | "loss";

}


export interface EloHistory {

  playerId:number;

  leaderboard:string;

  points:EloPoint[];

}
