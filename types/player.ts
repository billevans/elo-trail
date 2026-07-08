export interface AOE4Player {

  profile_id:number;

  name:string;

  country?:string;

  avatar?:string;

  steam_id?:string;

  social?:{
    twitch?:string;
    youtube?:string;
  };

}


export interface PlayerRating {

  leaderboard:string;

  rating:number;

  rank:number;

  rank_level:string;

  games:number;

  wins:number;

  losses:number;

}


export interface PlayerProfile
extends AOE4Player {

  ratings?:PlayerRating[];

}
