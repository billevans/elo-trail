interface ErrorStateProps {

  message?:string;

}


export default function ErrorState({

  message=
  "Something went wrong."

}:ErrorStateProps){

  return (

    <div

      className="
        rounded-xl
        border
        border-red-500/20
        bg-red-500/10
        p-6
        text-center
      "

    >

      <h2
        className="
          font-semibold
          text-red-300
        "
      >

        Error

      </h2>


      <p
        className="
          mt-2
          text-sm
          text-red-200
        "
      >

        {message}

      </p>


    </div>

  );

}
