import {
PlayerRating
} from "@/types/player";


import RatingCard
from "./rating-card";



interface Props {

ratings:
PlayerRating[];

}



export default function StatsGrid({

ratings

}:Props){


if(!ratings?.length){

return (

<p
className="
text-slate-400
"
>

No ratings available.

</p>

);

}


return (

<div

className="
grid
gap-6
md:grid-cols-2
"

>


{
ratings.map(
(rating)=>(


<RatingCard

key={
rating.leaderboard
}

rating={
rating
}

/>


)

)

}


</div>

);

}
