"use client";


import {
useState
} from "react";


import {
Input
} from "@/components/ui/input";


import {
usePlayerSearch
} from "@/hooks/use-player-search";


import SearchResults
from "./search-results";


import LoadingState
from "@/components/common/loading-state";


import ErrorState
from "@/components/common/error-state";



export default function PlayerSearch(){


const [
query,
setQuery
]=useState("");



const {
data,
isLoading,
error
}
=
usePlayerSearch(query);



return (

<div
className="
w-full
max-w-xl
space-y-6
"
>


<Input

placeholder="
Search Age of Empires IV player...
"

value={
query
}

onChange={
(e)=>
setQuery(
e.target.value
)
}

/>


{
isLoading &&
<LoadingState />
}



{
error &&
<ErrorState
message={
"Unable to search players"
}
/>
}



{
data &&
<SearchResults
players={
data
}
/>
}



</div>

);

}
