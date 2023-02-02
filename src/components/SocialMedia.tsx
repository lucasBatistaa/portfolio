interface socialMediaProps {
    icon: JSX.Element
    link: string
}

export function SocialMedia({ icon, link }: socialMediaProps) {
    return (
        <a
            href={link}
            className="p-1 bg-gray-400 dark:bg-gray-300 w-fit rounded-lg cursor-pointer hover:opacity-75 duration-300"
            target="_blank"
        >
            {icon}
        </a>
    )
}