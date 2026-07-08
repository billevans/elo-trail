export const APP_CONFIG = {
  name: "ELO Trail",
  description:
    "Track Age of Empires IV player ELO history over time"
};

export const AOE4WORLD = {
  API_URL:
    process.env.AOE4WORLD_API_URL ??
    "https://aoe4world.com/api/v0",

  DEFAULT_GAME_MODE: "rm_solo",

  SUPPORTED_MODES: [
    {
      id: "rm_solo",
      name: "Ranked 1v1"
    },
    {
      id: "rm_team",
      name: "Ranked Team"
    }
  ]
};
