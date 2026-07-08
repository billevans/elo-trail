export function formatRating(
  rating:number | undefined
){

  if(!rating){
    return "Unrated";
  }


  return new Intl.NumberFormat(
    "en-US"
  ).format(
    rating
  );

}
