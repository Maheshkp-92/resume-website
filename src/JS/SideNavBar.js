
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
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light side-nav bg-nav-color">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
          <img src="./Resume_logo.png" data-bs-toggle="tooltip" title="Mahesh Kumar K P" alt="M Logo" width="40" height="40" className="me-2" />
          <div className='row'>
                <div className='col-md-12 col-lg-12 displayName'>
                    <span className="fs-5 fw-semibold">Mahesh Kumar K P</span>
                    <small> Frontend Developer</small>
                </div>
            </div>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" data-bs-toggle="tooltip" title="Profile">
            <a href="#profile" onClick={() => handleNavClick('profile')} className="nav-link profile active"><i className="fa-solid fa-user fa-sm"></i> <span className='nav-text'> Profile</span></a>
          </li>
          <li data-bs-toggle="tooltip" title="Experience">
            <a href="#experience" onClick={() => handleNavClick('experience')} className="nav-link experience text-dark"><i className="fa-solid fa-briefcase fa-sm"></i> <span className='nav-text'>Experience</span></a>
          </li>
          <li data-bs-toggle="tooltip" title="Education">
            <a href="#education" onClick={() => handleNavClick('education')} className="nav-link education text-dark"><i className="fa-solid fa-user-graduate fa-sm"></i> <span className='nav-text'>Education</span></a>
          </li>
          <li data-bs-toggle="tooltip" title="Skills">
            <a href="#skills" onClick={() => handleNavClick('skills')} className="nav-link skills text-dark"><i className="fa-solid fa-laptop-code fa-sm"></i> <span className='nav-text'>Skills</span></a>
          </li>
          <li className='onlyMobileView' data-bs-toggle="tooltip" title="Contact Details">
            <a href="#contact" onClick={() => handleNavClick('contact')} className="nav-link contact text-dark"><i className="fa-solid fa-phone fa-sm"></i> <span className='nav-text'>Contact</span></a>
          </li>
        </ul>

        <div className="mt-auto onlyDesktopView">
          <div className="row">
            <div className="col-md-12">
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
