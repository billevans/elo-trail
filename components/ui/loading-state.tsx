import {
  Skeleton
} from "@/components/ui/skeleton";


export default function LoadingState(){

  return (

    <div
      className="
        space-y-4
      "
    >

      <Skeleton
        className="
          h-8
          w-64
        "
      />


      <Skeleton
        className="
          h-40
          w-full
        "
      />


      <Skeleton
        className="
          h-20
          w-full
        "
      />


    </div>

  );

}
