import {
  AOE4WORLD
} from "@/lib/constants";

import {
  AOE4Player
} from "@/types/player";


import {
  PlayerSearchResponse
} from "@/types/api";


export class AOE4WorldClient {


  private baseUrl =
    AOE4WORLD.API_URL;



  async searchPlayers(
    query:string
  )
  :Promise<AOE4Player[]>{


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
        "Unable to search players"
      );

    }


    const data:
      PlayerSearchResponse =
      await response.json();


    return data.players;

  }



  async getPlayer(
    id:string
  )
  {

    const response =
      await fetch(
        `${this.baseUrl}/players/${id}`,
        {
          next:{
            revalidate:300
          }
        }
      );


    if(!response.ok){

      throw new Error(
        "Unable to fetch player"
      );

    }


    return response.json();

  }

}


export const aoe4world =
  new AOE4WorldClient();
