import { z } from "zod";


export const playerSearchSchema =
  z.object({

    query:
      z
      .string()
      .trim()
      .min(
        2,
        "Search query must contain at least 2 characters"
      )
      .max(
        50,
        "Search query is too long"
      )

  });


export type PlayerSearchInput =
  z.infer<
    typeof playerSearchSchema
  >;
