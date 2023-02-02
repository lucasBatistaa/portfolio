import config from '../../config.json'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../utils/ResponsiveSettings';


export function Skills() {
    const list = config.skills

    return (
        <div
            className="bg-sky-500 dark:bg-gray-300"
            id='skills'
        >
            <div className='flex flex-col w-4/5 m-auto py-24'>
                <h1 className="text-5xl font-bold mb-8 text-center dark:text-slate-900">Skills</h1>

                <div className='flex gap-8 flex-wrap justify-center items-center'>
                    {
                        list.map((skill, i) => (
                            <img src={skill} key={i} className="w-28 max-lg:w-20" />
                        ))
                    }
                </div>
            </div>


        </div>
    )
}

