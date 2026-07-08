import PlayerSearch
from "@/components/search/player-search";


export default function HomePage(){


return (

<section

className="
flex
min-h-[70vh]
flex-col
items-center
justify-center
gap-8
"

>


<div

className="
text-center
"

>


<h1

className="
text-5xl
font-bold
"

>

ELO Trail

</h1>



<p

className="
mt-4
text-slate-400
"

>

Track Age of Empires IV player rankings over time

</p>


</div>



<PlayerSearch />


</section>

);


}
