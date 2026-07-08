import {
  InputHTMLAttributes
} from "react";

import {
  cn
} from "@/lib/utils";


export function Input({

  className,
  ...props

}:InputHTMLAttributes<HTMLInputElement>){

  return (

    <input

      className={cn(

        `
        w-full
        rounded-lg
        border
        border-white/10
        bg-slate-900
        px-4
        py-3
        text-white
        outline-none
        placeholder:text-slate-500
        focus:border-blue-500
        `,

        className

      )}

      {...props}

    />

  );

}
