import * as React from 'react'
import { Element } from 'react-scroll'

export class Awards extends React.PureComponent {
    render () {
        return (
          <Element name="awards" className="element" >
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
                <div className="w-100 awards">
                  <h2 className="mb-5">Awards &amp; Certifications</h2>
                  <ul className="fa-ul mb-0">
                    <li>
                      <i className="fa-li fa fa-trophy text-warning"></i>
                      Paper Published in IEEE :- Sarcasm Detection using Recurrent Neural Networks</li>
                  </ul>
                </div>
            </section>
          </Element>
        )
    }
}