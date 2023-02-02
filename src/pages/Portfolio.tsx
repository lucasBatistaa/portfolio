import config from '../../config.json'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/ResponsiveSettings';
import { ComputerTower, GithubLogo } from 'phosphor-react';

export function Portfolio() {
    const listPortfolio = config.portfolio

    return (
        <div
            className="w-4/5 max-w-[1140px] m-auto flex flex-col py-24 z-0"
            id='portfolio'
        >
            <h1 className="text-5xl font-bold mb-8 text-center">Portfólio</h1>

            <Carousel
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                draggable={false}

            >
                {listPortfolio.map((portfolio, i) => (
                    <div
                        key={i}
                        className="mx-3 flex flex-col gap-4 bg-blue-900 dark:bg-gray-300 text-white dark:text-slate-900 rounded-md"
                    >
                        <img
                            src={portfolio}
                            className="rounded-t-md w-max"
                        />

                        <h2 className='text-center'>Projeto XQQ</h2>

                        <div className='flex mb-2'>
                            <button className='flex justify-center items-center gap-2 flex-1 py-2 hover:opacity-75'> <GithubLogo /> Github</button>
                            <button className='flex justify-center items-center gap-2 flex-1 py-2 hover:opacity-75'> <ComputerTower /> Deploy</button>
                        </div>

                    </div>
                ))}
            </Carousel>

        </div>
    )
}