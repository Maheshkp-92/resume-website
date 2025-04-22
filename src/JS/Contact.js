import React from 'react'
const Contact = () => {
    return(
        <div className='row onlyMobileView'>
            <div className='col-md-12 col-lg-12 col-xs-12'>
                <div className='divContainer'><span className='sub-heading'>Contact Details</span></div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-xs-12">
                            <div className='d-flex flex-column ml1_5rem mt-4'>
                                <small className='phone'><i className='fa fa-phone fa-small'></i> +91-7348820501</small>
                                <small className='email'><i className='fa fa-envelope fa-small'></i> mkp92official@gmail.com</small>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact