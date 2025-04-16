
import React from 'react'
import '../css/Module.css'

const SideNav = () => {
      //const [activeSection, setActiveSection] = useState('profile');
      const $ = window.jQuery;
      const handleNavClick = (section) => {
        $('.active').addClass('text-dark').removeClass('active')
       $('.'+section).addClass('active')
      }
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light side-nav bg-nav-color" style={{ width: '270px', height: '100vh', position: 'fixed' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <img src="./Resume_logo.png" alt="M Logo" width="40" height="40" className="me-2" />
          <div className='row'>
                <div className='col-md-12 col-lg-12'>
                    <span className="fs-5 fw-semibold">Mahesh Kumar K P</span>
                    <small> Sr. Software Developer</small>
                </div>
            </div>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#profile" onClick={() => handleNavClick('profile')} className="nav-link profile active"><i className="fa-solid fa-user fa-sm"></i> Profile</a>
          </li>
          <li>
            <a href="#experience" onClick={() => handleNavClick('experience')} className="nav-link experience text-dark"><i className="fa-solid fa-briefcase fa-sm"></i> Experience</a>
          </li>
          <li>
            <a href="#education" onClick={() => handleNavClick('education')} className="nav-link education text-dark"><i className="fa-solid fa-user-graduate fa-sm"></i> Education</a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavClick('skills')} className="nav-link skills text-dark"><i className="fa-solid fa-laptop-code fa-sm"></i> Skills</a>
          </li>
        </ul>

        <div className="mt-auto">
          <div className="row">
            <div className="col-12">
              <hr/>
                <div className='d-flex flex-column textWhite'>
                  <small className="text-muted textWhite"><i className='fa fa-phone fa-small'></i> +91-7348820501</small>
                  <small className="text-muted textWhite"><i className='fa fa-envelope fa-small'></i> mkp92official@gmail.com</small>
                </div>
            </div>
          </div>
          </div>
      </div>
    );
  };
  
  export default SideNav;
