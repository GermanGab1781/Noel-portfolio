import { TbBrandWhatsapp } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import perfil from '../public/images/Perfil.png'
import Image from 'next/image';
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex md:flex-row flex-col min-h-[94vh] cursor-default bg-[url('../public/images/Fondo.png')] bg-cover ">
      {/* Titulo e Info */}
      <section className="md:w-[60vw] h-[90vh] md:mt-0 mt-[8vh] m-auto">
        <div className='flex flex-col md:h-[30%] md:w-[80%] w-full md:mb-0 mb-[24vh] place-content-center text-center whitespace-nowrap'>
          <h1 className='md:text-6xl text-4xl font-bold text-blue-500'>Estudio Jurídico</h1>
          <h1 className='md:text-5xl text-3xl md:ml-16 md:mt-2 text-white'>Noel Maria Caceres</h1>
        </div>
        {/* Info */}
        <div className='h-[70%] md:pl-10 pt-10 bg-gradient-to-b from-blue-900 to-transparent text-gray-300 '>
          {/* Ramas de derecho */}
          <h2 className='text-3xl text-white text-center'>Ramas de derecho</h2>
          <div className='flex flex-wrap gap-5 mt-2 md:text-xl'>
            <div className='ml-4 group'>
              <h3 className='group-hover:text-white md:text-gray-300 text-white decoration-gray-300 md:text-2xl text-lg'>Derecho Público</h3>
              <ul className='ml-4'>
                <li>Constitucional</li>
                <li>Penal</li>
                <li>Administrativo</li>
                <li>Procesal</li>
              </ul>
            </div>
            <div className='ml-4 group'>
              <h3 className='group-hover:text-white md:text-gray-300 text-white decoration-gray-300 md:text-2xl text-lg'>Derecho Privado</h3>
              <ul className='ml-4'>
                <li>Civil</li>
                <li>Mercantil</li>
                <li>Internacional privado</li>
              </ul>
            </div>
            <div className='ml-4 group'>
              <h3 className='group-hover:text-white md:text-gray-300 text-white decoration-gray-300 md:text-2xl text-lg'>Derecho Social</h3>
              <ul className='ml-4'>
                <li>Laboral</li>
                <li>Seguridad Social</li>
                <li>Agrario</li>
              </ul>
            </div>
          </div>
          <Link href="/dudas" className='text-2xl text-white group'><p className='mt-10 group-hover:scale-105 group-hover:text-blue-500  transition-all'>Resolución de dudas jurídicas</p></Link>
          <Link href="/consultas" className='text-2xl text-white group'><p className="group-hover:scale-105  group-hover:text-blue-500 transition-all">Consultas virtuales</p></Link>
          <div className="flex flex-row mt-10 m-auto">
            <p className='text-2xl text-blue-500 my-auto'>Contactame:</p>
            <span className="flex gap-x-4 ml-10 text-[50px]">
              <a href="https://wa.me/+5492901304989?text=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
              </a>
              <a href="mailto:example@example.com?subject=Consulta&body=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                <MdOutlineMailOutline className="text-white hover:scale-105 cursor-pointer" />
              </a>
            </span>
          </div>
        </div>
      </section>
      {/* Foto de Perfil */}
      <section className="md:w-[40vw] md:h-[90vh] h-[25vh] aspect-square md:mt-0 mt-[19vh] md:relative absolute md:left-auto left-1/2 md:transform-none transform md:translate-x-0 -translate-x-1/2  place-content-center ">
        <Image
          className='m-auto md:w-[80%] md:h-[90%] border-4 border-blue-950 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition duration-300'
          src={perfil}
          alt="Abogada Noel Maria Caceres"
        />
      </section>

    </main>
  );
}

