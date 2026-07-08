"use client";


import {
useState
} from "react";


import {
useRatingHistory
} from "@/hooks/use-rating-history";


import EloHistoryChart
from "@/components/charts/elo-history-chart";


import LoadingState
from "@/components/common/loading-state";


import ErrorState
from "@/components/common/error-state";


import {
Button
} from "@/components/ui/button";



interface Props {

playerId:number;

}



const ladders=[

{
id:"rm_solo",
name:"Ranked 1v1"
},

{
id:"rm_team",
name:"Ranked Team"
}

];



export default function RatingHistorySection({

playerId

}:Props){


const [
leaderboard,
setLeaderboard
]
=
useState(
"rm_solo"
);



const {
data,
isLoading,
error
}
=
useRatingHistory(

playerId,

leaderboard

);



return (

<section

className="
space-y-6
"

>


<div

className="
flex
gap-3
"

>


{
ladders.map(
(item)=>(


<Button

key={
item.id
}

variant={
leaderboard===item.id
?
"default"
:
"secondary"
}

onClick={()=>setLeaderboard(item.id)}

>

{item.name}

</Button>


)

)

}


</div>



{
isLoading &&
<LoadingState
message="Loading ELO history..."
/>
}



{
error &&
<ErrorState
message="Unable to load ELO history"
/>
}



{
data &&
<EloHistoryChart

points={
data.points
}

/>
}



</section>

);

}