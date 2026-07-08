import {
  AOE4Player,
  PlayerProfile
} from "./player";


export interface PlayerSearchResponse {

  players: AOE4Player[];

}


export type PlayerProfileResponse =
  PlayerProfile;


export interface ApiError {

  error: string;

}
