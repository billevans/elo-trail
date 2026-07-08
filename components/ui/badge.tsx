import {
  HTMLAttributes
} from "react";

import {
  cn
} from "@/lib/utils";


export function Badge({

  className,
  ...props

}:HTMLAttributes<HTMLSpanElement>){

  return (

    <span

      className={cn(

        `
        inline-flex
        rounded-full
        bg-blue-600/20
        px-3
        py-1
        text-xs
        font-medium
        text-blue-300
        `,

        className

      )}

      {...props}

    />

  );

}
