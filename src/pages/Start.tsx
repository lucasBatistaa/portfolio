import { ArrowCircleDown, GithubLogo, InstagramLogo, LinkedinLogo, Repeat } from "phosphor-react";

import { motion } from "framer-motion"
import { SocialMedia } from "../components/SocialMedia";
import { TypingTextAnimation } from "../components/TypingTextAnimation";

export function Start() {
    return (
        <div
            className="flex flex-col w-4/5 max-w-[1140px] m-auto"
            id="start"
        >
            <div className="flex gap-5 mt-28 mb-12 justify-between max-lg:flex-col">
                <div className="flex-1">
                    {/* <h1 className="text-5xl font-bold">Olá! Eu sou <br></br><span className="text-blue-900 dark:text-blue-300">Lucas Batista</span></h1> */}

                    <TypingTextAnimation />
                    <div className="w-80 max-lg:w-max px-10 py-3 my-8 bg-gray-400 dark:bg-gray-300 dark:text-slate-900 text-center rounded-sm">
                        <span>Desenvolvedor Front-End</span>

                    </div>

                    <p className="text-xl">Estudo a 4 anos na área, melhorando cada vez mais na criação de aplicações. Desde o design ao código, com o objetivo de causar impactos positivos, layouts responsivos e explorar a criatividade.</p>

                    <div className="flex gap-2 my-8 max-lg:justify-center">
                        <SocialMedia icon={<LinkedinLogo className="text-linkedin" />} link="https://www.linkedin.com/in/lucas-batista-tech/" />
                        <SocialMedia icon={<InstagramLogo className="text-instagram" />} link="https://www.instagram.com/lucasbatista30_/" />
                        <SocialMedia icon={<GithubLogo className="text-black" />} link="https://github.com/lucasbatistaa" />
                    </div>

                </div>

                <div className="flex-1 flex justify-end max-lg:justify-center">
                    <img src="src/assets/perfil.jpg" alt="Imagem" className="w-80 h-max rounded-lg" />
                </div>
            </div>


            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <ArrowCircleDown size={32} className="m-auto text-slate-900 dark:text-white" />

            </motion.div>


        </div >
    )
}