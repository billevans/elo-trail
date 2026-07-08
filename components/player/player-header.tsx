import Image from "next/image";

import {
  PlayerProfile
} from "@/types/player";


interface Props {
  player: PlayerProfile;
}


export default function PlayerHeader({
  player
}: Props) {

  return (

    <div
      className="
        flex
        items-center
        gap-6
      "
    >

      {
        player.avatar &&

        <Image
          src={player.avatar}
          alt={player.name}
          width={80}
          height={80}
          className="
            h-20
            w-20
            rounded-full
          "
        />
      }


      <div>

        <h1
          className="
            text-4xl
            font-bold
          "
        >
          {player.name}
        </h1>


        <p
          className="
            text-slate-400
          "
        >
          Profile ID: {player.profile_id}
        </p>


        {
          player.country &&

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            {player.country}
          </p>
        }

      </div>

    </div>

  );
}
