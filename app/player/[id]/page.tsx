import {
  notFound
} from "next/navigation";


import {
  aoe4world
} from "@/services/aoe4world";


import PlayerHeader
from "@/components/player/player-header";


import StatsGrid
from "@/components/player/stats-grid";


interface Props {
  params: Promise<{
    id: string;
  }>;
}


export default async function PlayerPage({
  params
}: Props) {

  const {
    id
  } = await params;


  const playerId =
    Number(id);


  if (
    Number.isNaN(playerId)
  ) {
    notFound();
  }


  let player;


  try {

    player =
      await aoe4world.getPlayer(
        playerId
      );

  } catch {

    notFound();

  }


  return (

    <div
      className="
        space-y-10
      "
    >

      <PlayerHeader
        player={player}
      />


      <section>

        <h2
          className="
            mb-6
            text-2xl
            font-semibold
          "
        >
          Ratings
        </h2>


       <StatsGrid
      ratings={
    player?.ratings ?? []
    }
  />

      </section>


    </div>

  );

}
