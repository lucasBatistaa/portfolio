import { EnvelopeSimple, LinkedinLogo, InstagramLogo, GithubLogo } from "phosphor-react";
import { SocialMedia } from "../components/SocialMedia";

export function Contact() {
    return (
        <div
            className="w-4/5 max-w-[1140px] m-auto flex flex-col gap-6 mb-24"
            id="contact"
        >
            <h1 className="text-5xl font-bold mb-5">Contato.</h1>

            <p className="text-xl font-light">Obrigado pela visita! Entre em contato em uma das <br className="max-sm:hidden" /> redes abaixo: </p>

            <div className="flex gap-1 items-center">
                <EnvelopeSimple size={32} />
                <p className="text-xl font-light max-lg:text-sm">contato.lucasbatista30@gmail.com</p>
            </div>

            <div className="flex gap-2">
                <SocialMedia icon={<LinkedinLogo className="text-linkedin" />} link="https://www.linkedin.com/in/lucas-batista-tech/" />
                <SocialMedia icon={<InstagramLogo className="text-instagram" />} link="https://www.instagram.com/lucasbatista30_/" />
                <SocialMedia icon={<GithubLogo className="text-black" />} link="https://github.com/lucasbatistaa" />
            </div>

        </div>
    )
}