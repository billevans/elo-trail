import {
  AOE4Player,
  PlayerProfile
} from "./player";


export interface PlayerSearchResponse {

  players:AOE4Player[];

}


export interface PlayerProfileResponse {

  player:PlayerProfile;

}


export interface ApiError {

  error:string;

}
