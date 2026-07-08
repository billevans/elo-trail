import {
NextRequest,
NextResponse
} from "next/server";


import {
aoe4world
} from "@/services/aoe4world";


import {
playerSearchSchema
} from "@/lib/validation";



export async function GET(
request:NextRequest
){

try{


const query =
request
.nextUrl
.searchParams
.get("query");



const result =
playerSearchSchema.safeParse({
query
});



if(!result.success){

return NextResponse.json(
{
error:
result.error.issues[0].message
},
{
status:400
}
);

}



const players =
await aoe4world.searchPlayers(
result.data.query
);



return NextResponse.json({
players
});


}

catch(error){


return NextResponse.json(
{
error:
"Search unavailable"
},
{
status:500
}
);


}

}
