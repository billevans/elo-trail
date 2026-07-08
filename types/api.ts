import { AOE4Player } from "./player";


export interface PlayerSearchResponse {

  players: AOE4Player[];

}


export interface PlayerResponse {

  player: AOE4Player;

}


export interface ApiError {

  message:string;

  status?:number;

}
