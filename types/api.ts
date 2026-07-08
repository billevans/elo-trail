import {
  AOE4Player,
  PlayerProfile
} from "./player";


export type PlayerProfileResponse = PlayerProfile;


export interface PlayerProfileResponse {

  player:PlayerProfile;

}


export interface ApiError {

  error:string;

}
