"use client";


import {
  useQuery
} from "@tanstack/react-query";


import {
  AOE4Player
} from "@/types/player";


async function searchPlayers(
  query:string
):Promise<AOE4Player[]> {


const response =
await fetch(
`/api/search?query=${encodeURIComponent(query)}`
);



if(!response.ok){

throw new Error(
"Unable to search players"
);

}


const data =
await response.json();


return data.players;

}



export function usePlayerSearch(
query:string
){


return useQuery({

queryKey:[
"players",
query
],


queryFn:
()=>searchPlayers(query),


enabled:
query.length >= 3,


staleTime:
5 * 60 * 1000

});


}
