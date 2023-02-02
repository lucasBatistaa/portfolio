import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Portfolio } from './pages/Portfolio'
import { Skills } from './pages/Skills'
import { Start } from './pages/Start'
import './styles/global.css'

import { IconContext } from 'phosphor-react'

export function App() {

	return (
		<IconContext.Provider
			value={{
				size: 32
			}}
		>
			<div className='w-screen h-screen flex flex-col overflow-x-hidden scroll-smooth scrollbar-thin scrollbar-thumb-blue-900 dark:scrollbar-thumb-blue-300 scrollbar-thumb-rounded-full '>
				<Header />
				<Start />

				<div className='w-4/5 max-w-[1140px] m-auto border-t-2 mt-12 border-slate-900 dark:border-white' />

				<AboutMe />
				<Skills />
				<Portfolio />
				<Contact />

				<div className='w-4/5 max-w-[1140px] m-auto border-t-2 mt-12 border-slate-900 dark:border-white' />

				<Footer />
			</div>
		</IconContext.Provider>

	)
}

