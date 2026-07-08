import {
  ButtonHTMLAttributes
} from "react";

import {
  cn
} from "@/lib/utils";


interface ButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement>{

  variant?:
    | "default"
    | "secondary"
    | "ghost";

}


export function Button({

  className,
  variant="default",
  ...props

}:ButtonProps){

  return (

    <button

      className={cn(

        `
        rounded-lg
        px-4
        py-2
        text-sm
        font-medium
        transition
        disabled:opacity-50
        `,

        variant==="default" &&
        `
        bg-blue-600
        hover:bg-blue-700
        `,

        variant==="secondary" &&
        `
        bg-slate-700
        hover:bg-slate-600
        `,

        variant==="ghost" &&
        `
        hover:bg-white/10
        `,

        className

      )}

      {...props}

    />

  );

}
