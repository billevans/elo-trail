import Link
from "next/link";


export default function Navbar(){

  return (

    <header
      className="
        border-b
        border-white/10
        bg-slate-950
      "
    >

      <nav
        className="
          container
          mx-auto
          flex
          items-center
          justify-between
          px-6
          py-4
        "
      >

        <Link
          href="/"
          className="
            text-xl
            font-bold
          "
        >

          ELO Trail

        </Link>


        <div
          className="
            flex
            gap-6
            text-sm
            text-slate-300
          "
        >

          <Link href="/">
            Search
          </Link>


          <Link href="/compare">
            Compare
          </Link>


        </div>


      </nav>

    </header>

  );

}
