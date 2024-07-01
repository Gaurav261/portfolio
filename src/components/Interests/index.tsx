import * as React from 'react'
import { Element } from 'react-scroll'

export class Interests extends React.PureComponent {
    render () {
        return (
            <Element name="interests" className="element" >
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p className="intrests mb-0">Apart from being a Full stack developer, I spend a large amount 
                    of my free time exploring the latest technology advancements in the frontend web development 
                    and backend world. Love to read research papers. </p>
                </div>
            </section>
            </Element>
        )
    }
}