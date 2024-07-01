import * as React from 'react'
import { Link, Element } from 'react-scroll'

export interface IFrontPageProps {

}

export interface IFrontPageState {

}
export class Education extends React.PureComponent {
    render () {
        return (
          <Element name="education" className="element" >

            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
              <div className="w-100">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                    <h3 className="mb-0">University of Pune</h3>
                    <div className="subheading mb-3">Bachelor of Engineering In Computer Science</div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary year">Aug 2014 - Jun 2018</span>
                  </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                  <div className="resume-content">
                    <h3 className="mb-0">North Maharashtra University</h3>
                    <div className="subheading mb-3">Intermediate</div>
                  </div>
                  <div className="resume-date text-md-right">
                    <span className="text-primary year">Jun 2012 - May 2014</span>
                  </div>
                </div>

              </div>
          </section>
          </Element>
        )
    }
}