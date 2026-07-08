function required(
  value: string | undefined,
  name: string
) {
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}`
    );
  }

  return value;
}


export const env = {
  AOE4WORLD_API_URL:
    process.env.AOE4WORLD_API_URL ??
    "https://aoe4world.com/api/v0"
};
