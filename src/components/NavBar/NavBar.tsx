import * as React from 'react';
import { Link, Element } from 'react-scroll'

const developerPhoto = require('../../assets/gaurav.jpeg');

export interface INavBarProps{

}
export class NavBar extends React.PureComponent {
    static identifier = 'front-page';
    state = {
      activeLink: 'about',
      responsiveFlag: ''
    }
    handleLink = (string: any) => {
      this.setState({ activeLink: string });
    }
    handleShowMenu = () => {
      const { responsiveFlag } = this.state;
      this.setState({ responsiveFlag:  !responsiveFlag })
    }
    render () {
        const {responsiveFlag} = this.state
        console.log(responsiveFlag)
        return (
            <React.Fragment>
            <nav className="navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger nav-bar-brand" href="#page-top">
                    <span className="d-block d-lg-none nav-bar-name">Gaurav Ostwal</span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={developerPhoto} alt="" />
                    </span>
                </a>
                <button className="navbar-toggler nav-bar-toggle-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => this.handleShowMenu()}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`nav-collapse-contents ${responsiveFlag ? 'open': ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="about" spy={true} smooth={true} duration={500} >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="experience" spy={true} smooth={true} duration={500} >Experience</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="projects" spy={true} smooth={true} duration={500} >Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="education" spy={true} smooth={true} duration={500} >Education</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="interests" spy={true} smooth={true} duration={500} >Interests</Link>
                    </li>
                    <li className="nav-item">
                    <Link activeClass="active" className="nav-link js-scroll-trigger smoothscroll" to="awards" spy={true} smooth={true} duration={500} >Awards</Link>
                    </li>
                </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">
              <Element name="about" className="element" >
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                  <div className="w-100">
                    <h1 className="mb-0"><span className="surname">Ostwal</span>
                      <span className="user-name text-primary">Gaurav</span>
                    </h1>
                    <div className="subheading mb-5">Pune · Maharashtra, 411012 · (+91) 9403825035 ·
                      <a href="mailto:gauravostwal11@gmail.com">gauravostwal11@gmail.com</a>
                    </div>
                    <p className="lead tagline mb-5"> 
                    "An Engineer by qualification, a Software Developer by profession and a ML enthusiast by passion." 
                    </p>
                    <p className="lead mb-5">
                      
                    "Building web apps is an art and HTTP is our stage to spread this positive art to the people" Thoroughly enjoy working with
                     full stack web development that includes integrating various JavaScript 
                     frameworks and back end technologies such as PostgreSql, MongoDb, 
                     SailsJs, NodeJS, ExpressJS. 
                     Love working on front end development using ReactJs, ReduxJS, Sass and writing Typescript. 
                    </p>
                    {/* <div className="social-icons">
                      <a href="https://www.linkedin.com/in/gaurav-ostwal-a8227413a">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      
                      <a href="https://www.facebook.com/gauravlikesu">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </div> */}
                  </div>
                </section>
              </Element>
              
            </div>
            </React.Fragment>
        );
    }
}
