"use client";


import {
  useQuery
} from "@tanstack/react-query";


import {
  EloHistory
} from "@/types/history";



async function fetchRatingHistory(

playerId:number,

leaderboard:string

):Promise<EloHistory>{


const response =
await fetch(

`/api/player/${playerId}/history?leaderboard=${leaderboard}`

);



if(!response.ok){

throw new Error(
"Unable to load rating history"
);

}


return response.json();

}



export function useRatingHistory(

playerId:number,

leaderboard="rm_solo"

){


return useQuery({

queryKey:[
"rating-history",
playerId,
leaderboard
],


queryFn:
()=>fetchRatingHistory(
playerId,
leaderboard
),


enabled:
Boolean(playerId),


staleTime:
5 * 60 * 1000

});


}