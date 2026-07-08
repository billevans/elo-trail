import Link
from "next/link";


import {
AOE4Player
} from "@/types/player";


import {
Card
} from "@/components/ui/card";



interface Props {

players:
AOE4Player[];

}



export default function SearchResults({

players

}:Props){


if(players.length===0){

return (

<p
className="
text-slate-400
"
>

No players found.

</p>

);

}



return (

<div
className="
space-y-3
"
>


{
players.map(
(player)=>(


<Link

key={
player.profile_id
}

href={
`/player/${player.profile_id}`
}

>


<Card

className="
hover:border-blue-500
transition
cursor-pointer
"

>


<div
className="
flex
items-center
justify-between
"
>


<div>


<h3
className="
font-semibold
"
>

{player.name}

</h3>


<p
className="
text-sm
text-slate-400
"
>

ID:
{player.profile_id}

</p>


</div>


<span
className="
text-blue-400
"
>

View

</span>


</div>


</Card>


</Link>


)

)

}


</div>

);

}
