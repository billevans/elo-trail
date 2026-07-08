import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(
  ...inputs: Parameters<typeof clsx>
) {
  return twMerge(clsx(inputs));
}


export function formatNumber(
  value:number
) {
  return new Intl.NumberFormat(
    "en-US"
  ).format(value);
}


export function formatDate(
  date:string | Date
) {
  return new Intl.DateTimeFormat(
    "en-AU",
    {
      dateStyle:"medium"
    }
  ).format(
    new Date(date)
  );
}
