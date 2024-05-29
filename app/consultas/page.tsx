"use client";
import { motion } from "framer-motion"
import { TbBrandWhatsapp } from "react-icons/tb";
import { SiFacebook } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
export default function page() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
            className="bg-blue-900 md:bg-[url('../public/images/FondoConsulta.png')] bg-[url('../public/images/FondoConsultaMobile.png')] md:bg-cover bg-[length:100%_100%] bg-no-repeat md:min-h-[94vh]"
        >
            <section className="w-full md:h-[94vh] h-full bg-gradient-to-br from-blue-900 to-transparent">
                <h1 className="text-4xl text-center text-white mt-10 pb-5">Consultas virtuales</h1>
                <div className="flex flex-col gap-y-2 text-xl text-gray-200 md:ml-2 md:px-0 px-2">
                    <p >&nbsp;Te brindaré la misma atención y calidad de servicio que recibirías en persona. Podremos discutir tus necesidades, resolver tus dudas y encontrar soluciones efectivas para cualquier situación que estés enfrentando. </p>
                    <p >&nbsp;Durante nuestra consulta, tendrás la oportunidad de hablar abiertamente sobre tus preocupaciones y recibir orientación personalizada.</p>
                    <p>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas sequi rem minima ipsam reiciendis obcaecati ex quidem. Voluptas omnis nulla laboriosam veritatis, in dolore similique inventore aut natus adipisci repellat non provident, nisi quas harum eveniet explicabo quis dolorum numquam exercitationem id. Autem a quos placeat ad mollitia soluta sequi architecto tempora eveniet.</p>
                    <div className="w-full md:mt-10">
                        <p className="text-center md:mt-10 mt-5 font-bold text-white">Si estás listo/a para dar el siguiente paso, ¡estaré encantada de asistirte!</p>
                        <div className="flex place-content-center gap-x-2 md:text-[14vh] text-[10vh] pb-5">
                            <a href="www.facebook.com" target="_blank">
                                <SiFacebook className="text-blue-600 hover:scale-105 cursor-pointer md:text-[13vh] text-[9vh]" />
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
                </div>
            </section>
        </motion.div>
    )
}