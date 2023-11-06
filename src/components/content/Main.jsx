import React from 'react'
import './main.css'
import { Sections } from './Sections'
import Side from '../side/Side'



function Main() {
    return (
        <section  id='grid-main'>
           <aside>
                <Side/>
           </aside>
            <Sections/>
        </section>
    )
}

export default Main
