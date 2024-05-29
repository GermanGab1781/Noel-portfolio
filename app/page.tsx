"use client";
import { TbBrandWhatsapp } from "react-icons/tb";
import { SiFacebook } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import perfil from '../public/images/Perfil.png'
import Image from 'next/image';
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  function SwalExample(titulo: string) {
    Swal.fire({
      title: titulo,
      text: 'Aca va la descripcion necesaria POREJEMPLO- La labor del abogado en este campo consiste no solo en lograr que se concrete el divorcio, sino que resulta de vital importancia el hecho de ayudar al cliente a llegar a la mejor solución conforme sus circunstancias personales, cuidando en todo momento los derechos de sus hijos (si los hubiere) Documentos necesarios para tramitar un divorcio: Copia del DNI de ambos cónyuges.Certificado de Matrimonio en original o copia certificada con timbrado o libreta de familia.Partida de nacimiento de los hijos timbrada para el juicio, con una antigüedad no mayor a seis meses de expedida',
      confirmButtonText: 'Volver'
    })
  }


  return (
    <motion.main exit={{ opacity: 0 }} className="flex md:flex-row flex-col min-h-[94vh] cursor-default md:bg-[url('../public/images/Fondo.png')] bg-[url('../public/images/FondoMobile.png')]  md:bg-cover bg-[length:100%_100%] bg-no-repeat md:pb-0 pb-40">
      {/* Titulo e Info */}
      <section className="md:w-[60vw] h-[90vh] md:mt-0 mt-[3vh] m-auto">
        <div className='flex flex-col md:h-[30%] md:w-[80%] w-full md:mb-0 mb-[24vh] place-content-center text-center whitespace-nowrap'>
          <h1 className='md:text-6xl text-4xl font-bold text-blue-500'>Estudio Jurídico</h1>
          <h1 className='md:text-8xl text-5xl font-semibold md:ml-[40%] md:mx-auto text-white'>Caceres</h1>
        </div>
        {/* Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, top: "auto" }} transition={{ duration: 1 }}
          className='h-[70%] w-screen md:w-auto md:pl-10 pt-10 bg-gradient-to-b from-blue-900 to-transparent text-gray-300 '
        >
          {/* Introduccion */}
          <h2 className='md:text-3xl text-2xl text-white md:text-start text-center'>Asesoramiento y Representación</h2>
          <ul className="list-inside list-disc decoration-blue-600 marker:text-blue-400 cursor-pointer">
            <li onClick={() => SwalExample("Accidentes de trabajo y Enfermedades")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Accidentes de trabajo y Enfermedades</li>
            <li onClick={() => SwalExample("Professional Art")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Professional Art</li>
            <li onClick={() => SwalExample("Accidentes de Transito")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Accidentes de Transito</li>
            <li onClick={() => SwalExample("Despidos")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Despidos</li>
            <li onClick={() => SwalExample("Sucesiones")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Sucesiones</li>
            <li onClick={() => SwalExample("Divorcios")} className="mt-1 border-b border-blue-200 hover:border-blue-500 hover:text-white">Divorcios</li>
          </ul>
          {/* Links */}
          <Link href="/dudas" className='text-2xl hover:text-white group'><p className='mt-10 w-[95%] mx-auto  border group-hover:border-b-blue-500 border-gray-900 rounded-xl bg-blue-950 text-center  transition-all'>Resolución de dudas jurídicas</p></Link>
          <Link href="/consultas" className='text-2xl hover:text-white group'><p className="mt-2 w-[95%] mx-auto  border group-hover:border-b-blue-500 border-gray-900 rounded-xl bg-blue-950 text-center  transition-all">Consultas virtuales</p></Link>
          <div className="flex md:flex-row flex-col md:text-start text-center md:mt-10 mt-5 m-auto">
            <p className='text-2xl text-blue-500 my-auto'>Contactame:</p>
            <span className="flex place-items-center gap-x-4 md:ml-10 place-content-center md:text-[50px] text-[60px]">
              <a href="www.facebook.com" target="_blank">
                <SiFacebook className="text-blue-600 hover:scale-105 cursor-pointer md:text-[43px] text-[55px]" />
              </a>
              <a href="www.instagram.com" target="_blank">
                <FaInstagram className="text-slate-200 hover:scale-105 cursor-pointer md:text-[45px] text-[55px]" />
              </a>
              <a href="https://wa.me/+542901306756?text=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
              </a>
              <a href="mailto:example@example.com?subject=Consulta&body=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                <MdOutlineMailOutline className="text-slate-200 hover:scale-105 cursor-pointer" />
              </a>
            </span>
            <a href="https://maps.app.goo.gl/ZwyBCYefLAdwhChD9" target="_blank" className="flex place-content-center group">
              <ImLocation className="text-5xl text-red-600" />
              <span className="my-auto group-hover:text-white md:whitespace-nowrap">Magallanes 2556, Ushuaia. Tierra del Fuego</span>
            </a>
          </div>
        </motion.div>
      </section>
      {/* Foto de Perfil */}
      <motion.section
        initial={isMobile ? { opacity: 0, top: 0 } : { opacity: 0, x: -100 }} animate={isMobile ? { opacity: 1, top: "auto" } : { opacity: 1, x: 0 }} transition={{ duration: 1 }}
        className="md:w-[40vw] md:h-[90vh] h-[25vh] aspect-square md:mt-0 mt-[15vh] md:relative absolute md:left-auto left-[46%] md:transform-none transform md:translate-x-0 -translate-x-1/2  "
      >
        <Image
          className='m-auto md:w-[80%] md:h-[90%] border-4 border-blue-950 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition duration-300'
          src={perfil}
          alt="Abogada Noel Maria Caceres"
        />
      </motion.section>

    </motion.main>
  );
}

