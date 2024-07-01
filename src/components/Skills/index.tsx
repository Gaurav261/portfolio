import * as React from 'react'
import { Element } from 'react-scroll'
import { skillContants } from '../../utilities/jsonConstants'
export class Skills extends React.PureComponent {
  progressBar(widthValue: any){
    return (
        <div className="progress-bar-container">
            <div className="filled-value" style={{ width: `${widthValue}`}} title={`${widthValue}`}>

            </div>
        </div>
    );
}
    render () {
        return (
          <Element name="skills" className="element" >
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
              <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                <div className="skills-details-container">
                    {skillContants.map((skill: any) => (
                        <div className="skill-detail">
                            <div className="skill">
                                { skill.skillName }
                            </div>
                                {this.progressBar(skill.efficiency)}
                        </div>
                    ))}
                </div>
                {/* <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                  <li className="workflow-content">
                    <i className="fa-li fa fa-check"></i>
                    Mobile-First, Responsive Design</li>
                  <li className="workflow-content">
                    <i className="fa-li fa fa-check"></i>
                    Cross Browser Testing &amp; Debugging</li>
                  <li className="workflow-content">
                    <i className="fa-li fa fa-check"></i>
                    Cross Functional Teams</li>
                  <li className="workflow-content">
                    <i className="fa-li fa fa-check"></i>
                    Agile Development &amp; Scrum</li>
                </ul> */}
              </div>
            </section>
            </Element>
        )
    }
}