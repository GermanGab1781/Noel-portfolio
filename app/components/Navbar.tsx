"use client";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {

  const [menu, setMenu] = useState(false)
  return (
    /* Nav animation for mobile */
    <nav className={menu
      ? "flex flex-row fixed top-0 h-[30vh] w-full bg-gray-800 font-bold z-40 transition-all"
      : "flex flex-row fixed top-0 h-[6vh] md:place-items-center md:place-content-between  w-full bg-gray-800 font-bold z-40 transition-all"
    }>
      {/* Desktop Render */}
      <Link className="mr-2 md:text-5xl text-4xl md:m-0 m-auto md:block hidden" href="/">🤝🏻</Link>
      <div className="md:flex hidden md:flex-row  flex-wrap text-center flex-col place-items-center md:w-auto w-screen md:gap-x-5 gap-x-0 text-white">
        <Link className="text-md md:my-0 my-auto" href="/dudas">Dudas Jurídicas</Link>
        <Link className="text-md md:my-0 my-auto" href="/consultas">Consultas Virtuales</Link>
        <Link className="mr-0 md:mr-5 text-2xl text-blue-500 my-auto" href="/contacto">
          Contacto
        </Link>
      </div>
      {/* Mobile Render */}
      <div className="md:hidden flex flex-row mt-2 justify-between w-screen transition-all">
        <Link onClick={() => setMenu(false)} className="mr-2 md:text-5xl text-4xl" href="/">🤝🏻</Link>
        <Link onClick={() => setMenu(false)} className="absolute mr-0 text-2xl text-blue-500 left-1/2 transform -translate-x-1/2" href="/contacto">Contacto</Link>
        <span onClick={() => setMenu(!menu)} className="text-4xl text-blue-500 mr-1" ><FaBars /></span>
      </div>
      <div className={menu ? "absolute mt-[9vh] flex flex-col gap-y-5 text-center left-1/2 transform -translate-x-1/2 transition-all delay-2000 " : "hidden transition-all delay-2000"}>
        <Link onClick={() => setMenu(!menu)} className="text-md md:my-0 my-auto" href="/dudas">Dudas Jurídicas</Link>
        <Link onClick={() => setMenu(!menu)} className="text-md md:my-0 my-auto" href="/consultas">Consultas Virtuales</Link>
      </div>
    </nav>
  )
}
