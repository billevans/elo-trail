import {
  AOE4WORLD
} from "@/lib/constants";


import {
  EloHistory,
  EloPoint
} from "@/types/history";


interface GameResponse {

  games?:any[];

}



export async function getPlayerRatingHistory(

  playerId:number,

  leaderboard="rm_solo"

):Promise<EloHistory>{


const response =
await fetch(

`${AOE4WORLD.API_URL}/players/${playerId}/games?leaderboard=${leaderboard}&limit=100`,

{

next:{
revalidate:300
}

}

);



if(!response.ok){

throw new Error(
"Unable to load player games"
);

}



const data:
GameResponse =
await response.json();



const points:
EloPoint[] = [];



for(
const game of data.games ?? []
){


/*
 Future API mapping point.

 Different API versions expose rating
 fields differently, so we safely inspect.
*/


const player =
game.players?.find(
(player:any)=>
player.profile_id === playerId
);



if(
player?.rating
){


points.push({

date:
game.started_at,

rating:
player.rating,

result:
player.result === "win"
? "win"
: "loss"

});


}


}



return {

playerId,

leaderboard,

points:
points.sort(

(a,b)=>

new Date(a.date).getTime()
-
new Date(b.date).getTime()

)

};


}
