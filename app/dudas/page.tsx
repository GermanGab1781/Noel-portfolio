"use client";
import { motion } from "framer-motion"
import { SiFacebook } from "react-icons/si";
import { TbBrandWhatsapp } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
export default function page() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative min-h-[94vh] md:bg-[url('../public/images/DudasBg.png')] md:bg-cover bg-[url('../public/images/DudasBgMobile.png')] bg-[length:100%_100%]">
            {/* Texto */}
            <section className="z-10 w-full h-[94vh] bg-gradient-to-b from-blue-900 to-transparent rounded-t-2">
                <h1 className="md:text-4xl text-3xl text-center text-white pt-10">Resolución de Dudas jurídicas</h1>
                <div className="text-xl mt-5 ml-5 flex flex-col gap-2 text-gray-300 text-start">
                    <p>&nbsp;Conocimientos comprobables para resolver todo tipo de dudas jurídicas</p>
                    <p>&nbsp;Especializada en ofrecer orientación sólida y precisa a clientes en busca de respuestas claras en materia legal </p>
                    <p>&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsa vel eligendi, repellendus alias cum, velit quas harum soluta ullam at illo exercitationem hic? Aspernatur voluptate obcaecati amet illo aliquam?</p>
                </div>
                <div className="text-[20vh]  w-full pt-10">
                    <p className="text-center text-2xl font-bold">Contactate y hablemos sobre tus dudas</p>
                    <div className="flex place-content-center gap-x-2 md:text-[14vh] text-[10vh] pb-5">
                        <a href="www.facebook.com" target="_blank">
                            <SiFacebook className="text-blue-600 hover:scale-105 cursor-pointer md:text-[13vh] text-[10vh] " />
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
                </div>
            </section>
        </motion.div>
    );
}