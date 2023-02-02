import { Books, Laptop, Leaf } from "phosphor-react";
import { Cards } from "../components/Cards";

export function AboutMe() {
    return (
        <div
            className="w-4/5 max-w-[1140px] m-auto flex-col py-24"
            id="aboutme"
        >
            <div>
                <h1 className="text-5xl font-bold mb-5">Sobre mim.</h1>
                <p className="text-xl font-light sm:text-justify">
                    Atualmente estou no 3º semestre da faculdade de Análise e Desenvolvimento de Sistemas(ADS) e junto faço estágio na prefeitura de minha cidade. Comecei os estudos na área a 4 anos atrás, em 2019. De lá para cá tem sido muito aprendizado e cada vez mais experiência adquirida. Hoje estou focado nos estudos de React e JavaScript, juntamente com UI e UX design.
                </p>
            </div>

            <div className="flex gap-5 justify-center mt-16 max-lg:flex-wrap">
                <Cards icon={<Leaf />} title={"Aprendizado"} description={"+4 anos"} />
                <Cards icon={<Books />} title={"Faculdade"} description={"Análise de Sistemas"} />
                <Cards icon={<Laptop />} title={"Projetos"} description={"+8 concluídos"} />
            </div>


        </div>
    )
}