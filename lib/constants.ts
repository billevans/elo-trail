export const AOE4WORLD = {

  API_URL:
    process.env.AOE4WORLD_API_URL ??
    "https://aoe4world.com/api/v0",

  DEFAULT_LEADERBOARD:
    "rm_solo",

  SUPPORTED_LEADERBOARDS:[

    {
      id:"rm_solo",
      name:"Ranked Solo"
    },

    {
      id:"rm_team",
      name:"Ranked Team"
    }

  ]

};
