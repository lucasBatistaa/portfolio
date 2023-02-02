interface buttonProps {
    text: string
}


export function Button({ text }: buttonProps) {
    return (
        <a href="#linkedin">
            <div className="h-14 w-52 bg-blue-800 flex justify-center items-center rounded-2xl mt-8">
                <span className="text-white text-2xl">{text}</span>
            </div>
        </a>
    )
}