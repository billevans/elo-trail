import {
PlayerRating
} from "@/types/player";


import {
Card
} from "@/components/ui/card";


import {
formatRating
} from "@/lib/format-rating";



interface Props {

rating:
PlayerRating;

}



export default function RatingCard({

rating

}:Props){


return (

<Card>


<h3

className="
text-sm
text-slate-400
"

>

{rating.leaderboard}

</h3>



<p

className="
mt-2
text-3xl
font-bold
"

>

{formatRating(
rating.rating
)}

</p>



<div

className="
mt-4
grid
grid-cols-3
gap-4
text-sm
"

>


<div>

<p
className="
text-slate-400
"
>
Rank
</p>

<p>
{rating.rank}
</p>

</div>



<div>

<p
className="
text-slate-400
"
>
Wins
</p>

<p>
{rating.wins}
</p>

</div>



<div>

<p
className="
text-slate-400
"
>
Games
</p>

<p>
{rating.games}
</p>

</div>


</div>


</Card>

);

}
