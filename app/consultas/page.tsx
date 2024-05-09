import { TbBrandWhatsapp } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
export default function page() {
    return (
        <div className="bg-blue-900 bg-[url('../public/images/FondoConsulta.png')] bg-cover bg-no-repeat md:min-h-[94vh]">
            <section className="w-full md:h-[94vh] h-full bg-gradient-to-br from-blue-900 to-transparent">
                <h1 className="text-4xl text-center text-white pt-10 pb-5">Consultas virtuales</h1>
                <div className="flex flex-col gap-y-2 text-xl text-gray-200 md:ml-2 md:px-0 px-2">
                    <p >&nbsp;Te brindaré la misma atención y calidad de servicio que recibirías en persona. Podremos discutir tus necesidades, resolver tus dudas y encontrar soluciones efectivas para cualquier situación que estés enfrentando. </p>
                    <p >&nbsp;Durante nuestra consulta, tendrás la oportunidad de hablar abiertamente sobre tus preocupaciones y recibir orientación personalizada.</p>
                    <p>&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas sequi rem minima ipsam reiciendis obcaecati ex quidem. Voluptas omnis nulla laboriosam veritatis, in dolore similique inventore aut natus adipisci repellat non provident, nisi quas harum eveniet explicabo quis dolorum numquam exercitationem id. Autem a quos placeat ad mollitia soluta sequi architecto tempora eveniet.</p>
                    <div className="w-full md:pt-10">
                        <p className="text-center md:pt-10 pt-5 font-bold text-white">Si estás listo/a para dar el siguiente paso, ¡estaré encantada de asistirte!</p>
                        <div className="flex place-content-center gap-x-10 text-[20vh] pb-5">
                            <a href="https://wa.me/+5492901304989?text=Hola, me gustaria tener una consulta virtual" target="_blank">
                                <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
                            </a>
                            <a href="mailto:example@example.com?subject=Consulta virtual&body=Hola, me gustaria tener una consulta virtual" target="_blank">
                                <MdOutlineMailOutline className="text-white hover:scale-105 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}