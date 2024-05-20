"use client";
import { motion } from "framer-motion"
import { MdOutlineMailOutline } from "react-icons/md"
import { TbBrandWhatsapp } from "react-icons/tb"
export default function page() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-[94vh] md:bg-[url('../public/images/FondoContacto.png')] bg-[url('../public/images/FondoContactoMobile.png')] bg-no-repeat md:bg-cover bg-[length:100%_100%] ">
            <div className="h-[70vh] place-content-center bg-gradient-to-b from-blue-900 to-transparent">
                <h2 className="md:text-4xl text-3xl text-center">Mis medios de contacto</h2>
                <div className="flex place-content-center gap-x-10 text-[20vh]">
                    <a href="https://wa.me/+5492901304989?text=Hola, me gustaria tener una consulta virtual" target="_blank">
                        <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
                    </a>
                    <a href="mailto:example@example.com?subject=Consulta virtual&body=Hola, me gustaria tener una consulta virtual" target="_blank">
                        <MdOutlineMailOutline className="text-white hover:scale-105 cursor-pointer" />
                    </a>
                </div>
            </div>
        </motion.div>
    )
}
