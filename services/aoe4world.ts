import {
  AOE4WORLD
} from "@/lib/constants";


import {
  AOE4Player,
  PlayerProfile
} from "@/types/player";


import {
  PlayerSearchResponse,
  PlayerProfileResponse
} from "@/types/api";


export class AOE4WorldClient {


private baseUrl =
  AOE4WORLD.API_URL;



async searchPlayers(
 query:string
):Promise<AOE4Player[]> {


 const response =
 await fetch(

 `${this.baseUrl}/players/search?query=${encodeURIComponent(query)}`,

 {
  next:{
   revalidate:300
  }
 }

 );


 if(!response.ok){

  throw new Error(
   "Player search failed"
  );

 }


 const data:
 PlayerSearchResponse =
 await response.json();


 return data.players ?? [];

}



async getPlayer(
 profileId:number
):Promise<PlayerProfile>{


const response =
await fetch(

`${this.baseUrl}/players/${profileId}`,

{
 next:{
  revalidate:300
 }
}

);


if(!response.ok){

throw new Error(
 "Player lookup failed"
);

}


const data:
PlayerProfileResponse =
await response.json();


return data.player;

}



}


export const aoe4world =
new AOE4WorldClient();
