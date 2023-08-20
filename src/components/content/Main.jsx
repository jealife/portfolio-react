import React from 'react'
import Side from './Side'
import './main.css'
import { Section } from './Section'



function Main() {
    return (
        <section  id='grid-main'>
           <aside>
                <Side/>
           </aside>
            <Section/>
        </section>
    )
}

export default Main
