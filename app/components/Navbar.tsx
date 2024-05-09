import Link from "next/link";

export default function Navbar() {


  return (
    <nav className="flex md:flex-row fixed md:place-items-center md:place-content-between top-0 h-[6vh] w-full bg-gray-800 font-bold z-40">
      <div>
        <Link className="mr-2 text-5xl" href="/">🤝🏻</Link>
      </div>
      <div className="flex md:flex-row flex-wrap text-center flex-col md:gap-x-5 gap-x-0 text-white">
        <Link className="" href="/dudas">Dudas Jurídicas</Link>
        <Link className="" href="/consultas">Consultas Virtuales</Link>
        <Link className="mr-5 md:mr-0 text-2xl text-blue-500" href="/contacto">
          Contacto
        </Link>
      </div>
    </nav>
  )
}
