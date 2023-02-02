import { Coffee, List, Moon, Sun, X } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'

const menuTitles = [
    { name: "Início", id: 'start' },
    { name: "Sobre mim", id: 'aboutme' },
    { name: "Skills", id: 'skills' },
    { name: "Portfólio", id: 'portfolio' },
    { name: "Contato", id: 'contact' }
]

export function Header() {
    const [theme, setTheme] = useState<string>()
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches

        {
            prefers ?
                setTheme('dark')
                :
                setTheme('light')
        }
    }, [])

    useEffect(() => {
        {
            theme === 'dark' ?
                document.documentElement.classList.add('dark')
                :
                document.documentElement.classList.remove('dark')
        }
    }, [theme])

    function handleThemeSwitch() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="w-full fixed pt-4 pb-4 z-10 bg-gray-300 dark:bg-gray-900">
            <div className='flex justify-between items-center w-4/5 m-auto'>

                <div className="text-blue-900 dark:text-blue-300 flex items-center gap-2">
                    <Coffee size={32} />
                    <h1 className="font-bold text-3xl">  Lucas.</h1>
                </div>

                <ul className='flex gap-6 dark:text-white text-xl max-lg:hidden'>
                    {
                        menuTitles.map((menu, i) => (
                            <li
                                className='hover:text-slate-700 dark:hover:text-blue-300 transition-all duration-300'
                                key={i}
                            >
                                <a href={`#${menu.id}`}>
                                    {menu.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <button
                    className='lg:hidden transition-all duration-500 hover:opacity-75'
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {
                        openMenu ?
                            <X />
                            :
                            <List />
                    }
                </button>

                <button
                    type='button'
                    onClick={handleThemeSwitch}
                    className='px-1 py-1 bg-slate-800 dark:bg-gray-300 rounded-full max-lg:fixed max-lg:bottom-4 max-lg:right-6 z-2'
                >


                    <div className="flex gap-3 justify-center items-center relative bg-slate-600 dark:bg-gray-400 rounded-full px-2 py-1 max-lg:hidden">
                        <Sun className='text-yellow-500' />
                        <Moon className='text-blue-900' />

                        <div className='w-8 h-8 bg-black-700 border-2 border-black absolute top-1 right-2 rounded-full dark:-translate-x-11 cursor-pointer duration-300' />
                    </div>

                    <div className='lg:hidden p-2'>
                        {
                            theme === 'dark' ?
                                <Moon className='text-blue-900' />
                                :
                                <Sun className='text-yellow-500' />

                        }

                    </div>

                </button>
            </div>

            {
                openMenu && <Navbar setCloseMenu={setOpenMenu} />
            }


        </div>
    )
}