
interface navbarProps {
    setCloseMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function Navbar({ setCloseMenu }: navbarProps) {
    const menuTitles = [
        { name: "Início", id: 'start' },
        { name: "Sobre mim", id: 'aboutme' },
        { name: "Skills", id: 'skills' },
        { name: "Portfólio", id: 'portfolio' },
        { name: "Contato", id: 'contact' }
    ]

    return (
        <div className='fixed lg:hidden h-full w-screen bg-gray-300 dark:bg-gray-900 z-10 left-0'>
            <ul className='flex flex-col w-4/5 m-auto dark:text-white text-xl border-t border-gray-900 dark:border-gray-300 pt-4 mt-6'>
                {
                    menuTitles.map((menu, i) => (
                        <a
                            className='hover:text-slate-700 dark:hover:text-blue-300 p-3 hover:bg-opacity-75 hover:opacity-75 transition-all duration-300'
                            key={i}
                            href={`#${menu.id}`}
                            onClick={() => setCloseMenu(false)}
                        >
                            <li

                            >
                                {menu.name}
                            </li>
                        </a>
                    ))
                }
            </ul>
        </div>
    )
}

// bg-gray-300 dark:bg-gray-900 text-slate-900 dark:text-white