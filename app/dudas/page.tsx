import { TbBrandWhatsapp } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
export default function page() {
    return (
        <div className="relative min-h-[94vh] bg-[url('../public/images/DudasBg.png')] bg-cover">
            {/* Texto */}
            <section className="z-10 w-full h-[94vh] bg-gradient-to-b from-blue-900 to-transparent rounded-t-2">
                <h1 className="text-4xl text-center text-white pt-10">Resolución de Dudas jurídicas</h1>
                <div className="text-xl mt-5 ml-5 flex flex-col gap-2 text-gray-300 text-start">
                    <p>Conocimientos comprobables para resolver todo tipo de dudas jurídicas</p>
                    <p>Especializada en ofrecer orientación sólida y precisa a clientes en busca de respuestas claras en materia legal </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsa vel eligendi, repellendus alias cum, velit quas harum soluta ullam at illo exercitationem hic? Aspernatur voluptate obcaecati amet illo aliquam?</p>
                </div>
                <div className="text-[20vh]  w-full pt-10">
                    <p className="text-center text-2xl font-bold">Contactate y hablemos sobre tus dudas</p>
                    <div className="flex place-content-center gap-x-10 ">
                        <a href="https://wa.me/+5492901304989?text=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                            <TbBrandWhatsapp className="text-green-500 hover:scale-105 cursor-pointer" />
                        </a>
                        <a href="mailto:example@example.com?subject=Consulta&body=Hola, me gustaria consultar sobre los servicios del estudio jurídico" target="_blank">
                            <MdOutlineMailOutline className="text-white hover:scale-105 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}