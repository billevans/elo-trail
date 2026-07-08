import { Skeleton } from "@/components/ui/skeleton";


interface LoadingStateProps {
  message?: string;
}


export default function LoadingState({
  message = "Loading..."
}: LoadingStateProps) {

  return (
    <div
      className="
        space-y-4
        rounded-xl
        border
        border-white/10
        bg-slate-900
        p-6
      "
    >

      <div className="flex items-center gap-3">

        <Skeleton
          className="
            h-8
            w-8
            rounded-full
          "
        />

        <p
          className="
            text-sm
            text-slate-400
          "
        >
          {message}
        </p>

      </div>


      <Skeleton
        className="
          h-4
          w-3/4
        "
      />


      <Skeleton
        className="
          h-4
          w-1/2
        "
      />


      <Skeleton
        className="
          h-24
          w-full
        "
      />

    </div>
  );
}
