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
  request: NextRequest
){

  try {

    const query =
      request
      .nextUrl
      .searchParams
      .get("query");


    const validation =
      playerSearchSchema.safeParse({
        query
      });


    if(
      !validation.success
    ){

      return NextResponse.json(

        {
          error:
            validation
            .error
            .issues[0]
            .message
        },

        {
          status:400
        }

      );

    }


    const players =
      await aoe4world.searchPlayers(
        validation.data.query
      );


    return NextResponse.json({

      players

    });


  }
  catch(error){

    console.error(
      "Player search failed:",
      error
    );


    return NextResponse.json(

      {
        error:
          "Unable to search players"
      },

      {
        status:500
      }

    );

  }

}
