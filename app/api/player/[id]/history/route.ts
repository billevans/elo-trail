import {
NextRequest,
NextResponse
} from "next/server";


import {
getPlayerRatingHistory
} from "@/services/rating-history";



export async function GET(

request:NextRequest,

{
params
}:{
params:
Promise<{
id:string
}>
}

){


const {
id
}
=
await params;


const leaderboard =
request
.nextUrl
.searchParams
.get(
"leaderboard"
)
??
"rm_solo";



try {


const history =
await getPlayerRatingHistory(

Number(id),

leaderboard

);



return NextResponse.json(
history
);


}

catch(error){


return NextResponse.json(

{
error:
"Unable to load history"
},

{
status:500
}

);


}

}