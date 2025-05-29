import React from 'react'
const Contact = () => {
    return(
        <div className='row onlyMobileView'>
            <div className='row'>
            <div col-md-12>
              <a href="/Mahesh_Frontend_Developer.pdf" download className="btn btn--primary-outline"><i className="fas fa-download me-2"></i>Download Resume</a>
            </div>
          </div>
            <div className='col-md-12 col-lg-12 col-xs-12'>
                <div className='divContainer'><span className='sub-heading'>Contact Details</span></div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xs-12">
                            <div className='d-flex flex-column ml1_5rem mt-4'>
                                <small className='phone'><i className='fa fa-phone fa-small'></i> +91-7348820501</small>
                                <small className='email'><i className='fa fa-envelope fa-small'></i> mkp92official@gmail.com</small>
                                <small className="linked-in"><a className='linkedIn' target="_blank_" href='https://www.linkedin.com/in/maheshkumar1992/'><i class="fa-brands fa-linkedin"></i> Mahesh K P</a></small>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact