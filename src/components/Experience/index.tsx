import * as React from 'react'
import { Element } from 'react-scroll'

export interface IFrontPageProps {

}

export interface IFrontPageState {

}
export class Experience extends React.PureComponent {
    render () {
        return (
          <Element name="experience" className="element" >
              <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                  <h2 className="mb-5">Experience</h2>
                  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <h3 className="mb-0">Full Stack Developer</h3>
                      <div className="subheading mb-3">Coditas Technologies PVT LTD</div>
                      <p className="description">
                      Working as a Full Stack developer for 
                      developing web apps with JavaScript frameworks such as 
                      React, ReduxJs and For Making Rest Apis with the help of SailsJs, 
                      MongoDB, Postgresql and using Sass, Bootstrap for making web apps look 
                      more professional with ES6 features and webpack 
                      for making a bundle after all a low size bundle is all we want.
                      </p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary year">Jun 2018 - Present</span>
                    </div>
                  </div>

                  <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                      <h3 className="mb-0">Project Intern</h3>
                      <div className="subheading mb-3">Anulom Technologies</div>
                      <p className="description">
                      Worked as a Project Intern for 
                      developing a research Project named as Sarcasm Detector and explored the concepts of Deep Learning
                      </p>
                    </div>
                    <div className="resume-date text-md-right">
                      <span className="text-primary year">Jun 2017 - Apr 2018</span>
                    </div>
                  </div>

                </div>
              </section>
            </Element>
        )
    }
}