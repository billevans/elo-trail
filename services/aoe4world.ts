import {
  AOE4WORLD
} from "@/lib/constants";


import {
  AOE4Player,
  PlayerProfile
} from "@/types/player";


import {
  PlayerSearchResponse
} from "@/types/api";


export class AOE4WorldClient {

  private baseUrl =
    AOE4WORLD.API_URL;


  async searchPlayers(
    query: string
  ): Promise<AOE4Player[]> {

    const response =
      await fetch(
        `${this.baseUrl}/players/search?query=${encodeURIComponent(query)}`,
        {
          next: {
            revalidate: 300
          }
        }
      );


    if (!response.ok) {

      throw new Error(
        `Player search failed (${response.status})`
      );

    }


    const data:
      PlayerSearchResponse =
      await response.json();


    return data.players ?? [];

  }


  async getPlayer(
    profileId: number
  ): Promise<PlayerProfile> {

    const response =
      await fetch(
        `${this.baseUrl}/players/${profileId}`,
        {
          next: {
            revalidate: 300
          }
        }
      );


    if (!response.ok) {

      throw new Error(
        `Player lookup failed (${response.status})`
      );

    }


    const data:
      PlayerProfile =
      await response.json();


    return data;

  }

}


export const aoe4world =
  new AOE4WorldClient();
