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
}=await params;



const history =
await getPlayerRatingHistory(
Number(id)
);



return NextResponse.json(
history
);

}
