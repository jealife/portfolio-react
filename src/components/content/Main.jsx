import React from 'react'
import './main.css'
import { Sections } from './Sections'
import Side from '../side/Side'



function Main() {
    return (
        <section className='flex lg:flex-row flex-col-reverse  max-w-[1300px]'>
           <aside>
                <Side/>
           </aside>
            <Sections/>
        </section>
    )
}

export default Main
