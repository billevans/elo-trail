import {
z
} from "zod";


export const playerSearchSchema =
z.object({

query:

z.string()
.trim()
.min(
3,
"Search requires at least 3 characters"
)
.max(
50,
"Search is too long"
)

});
