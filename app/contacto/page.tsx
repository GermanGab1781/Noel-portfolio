"use client";
import { motion } from "framer-motion"
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { MdOutlineMailOutline } from "react-icons/md"
import { TbBrandWhatsapp } from "react-icons/tb"
export default function page() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-[94vh] md:bg-[url('../public/images/FondoContacto.png')] bg-[url('../public/images/FondoContactoMobile.png')] bg-no-repeat md:bg-cover bg-[length:100%_100%] ">
            <div className="h-[70vh] place-content-center bg-gradient-to-b from-blue-900 to-transparent">
                <h2 className="md:text-4xl text-3xl text-center">Mis medios de contacto</h2>
                <div className="flex place-content-center gap-x-2 md:text-[13vh] text-[10vh]">
                    <a href="www.facebook.com" target="_blank">
                        <SiFacebook className="text-blue-600 hover:scale-105 cursor-pointer md:text-[12vh] text-[9vh]" />
                    </a>
                    <a href="www.instagram.com" target="_blank">
                        <FaInstagram className="text-slate-200 hover:scale-105 cursor-pointer" />
                    </a>
                    <a href="https://wa.me/+542901306756?text=Hola, me gustaria tener una consulta virtual" target="_blank">
                        <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
                    </a>
                    <a href="mailto:example@example.com?subject=Consulta virtual&body=Hola, me gustaria tener una consulta virtual" target="_blank">
                        <MdOutlineMailOutline className="text-white hover:scale-105 cursor-pointer" />
                    </a>

                </div>
                <a href="https://maps.app.goo.gl/ZwyBCYefLAdwhChD9" target="_blank" className="flex place-content-center">
                    <ImLocation className="text-5xl text-red-600" />
                    <span className="my-auto">Magallanes 2556, Ushuaia. Tierra del Fuego</span>
                </a>
            </div>
        </motion.div>
    )
}
