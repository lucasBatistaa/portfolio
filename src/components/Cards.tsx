
interface cardsProps {
    icon: JSX.Element
    title: string
    description: string
}

export function Cards({ icon, title, description }: cardsProps) {
    return (
        <div className="flex items-center justify-center px-6 py-4 bg-blue-900 dark:bg-gray-300 text-white dark:text-black rounded-xl w-72 h-24">
            <div className="flex gap-4 items-center justify-center">
                <div>
                    {icon}

                </div>

                <div>
                    <h2 className="font-bold">{title}</h2>
                    <span className="font-light">{description}</span>
                </div>
            </div>
        </div>
    )
}