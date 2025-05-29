import React from "react";
import '../css/main.scss'

const Experience = () =>{
    return(
        <div className="row">
            <div className="col-md-12 col-lg-12">
                <div className='divContainer'><span className='sub-heading'>Experience</span></div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 companyDetails">
                        <div className="companyDetails">
                            <div className="companyName">
                                <p>Ubix Systems Marketing Pvt. Ltd.</p>
                                <small>(<a target="_blank_" href="https://www.liveimpact.org">Liveimpact</a> )</small>
                            </div>
                            <div className="term">July 2018 - August 2024</div>
                            </div>
                        </div>
                    </div>
                    {/*-- Dashboard & Profile View --*/}
                    <ul className="timeline-container">
                        <li className="timeline">
                                <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                <div className='divContainer'><span className='sub-heading-1'>Dashboard & Profile View</span></div>
                                    <ul className="mb-0">
                                        <li>Developed user profiles with detailed information and payment data display.</li>
                                        <li>Implemented smart grid filters to enhance data exploration and analysis. </li>
                                        <li>Addressed UI bugs to ensure a seamless user experience.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li className="timeline">
                            {/*-- Events & Fundraiser --*/}
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                <div className='divContainer'><span className='sub-heading-1'>Events & Fundraiser</span></div>
                                    <ul className="mb-0">
                                        <li>Designed and implemented custom form fields for Events and Fundraiser modules.</li>
                                        <li>Provided previews for Events Ticketing Forms and Fundraiser Donation Forms, enhancing end-user engagement. </li>
                                        <li>Improved the UI dashboard for Participant Pages, creating a more user-friendly interface.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="timeline">
                            {/*-- Forms & Form Data --*/}
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                <div className='divContainer'><span className='sub-heading-1'>Forms & Form Data</span></div>
                                    <ul className="mb-0">
                                        <li>Demonstrated expertise in integrating new Custom Fields like Draw Signature and Big Data using WYSIWYG Editor.</li>
                                        <li>Implemented custom view grids in Form Data, improving data capture and organization. </li>
                                        <li>Notably created a Draw Signature feature using Canvas, enhancing form interactivity. </li>
                                        <li>Successfully integrated WYSIWYG Editors (CkEditor and Summernote) to manage large datasets.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li className="timeline">
                            {/*-- Timecard & Reservation --*/}
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                <div className='divContainer'><span className='sub-heading-1'>Timecard & Reservation</span></div>
                                    <ul className="mb-0">
                                        <li>Enhanced the Shift View by incorporating list and card views for employees' schedules.</li>
                                        <li>Implemented a print and download feature for Shift View details, improving data accessibility.</li>
                                        <li>Made significant UI enhancements and optimizations for a more visually appealing and intuitive experience.</li>
                                        <li>Designed and implemented statistics for Reservations, allowing data-driven decision-making.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="timeline">
                            {/*-- Skycast WeatherApp --*/}
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                <div className='divContainer'><span className='sub-heading-1'>SkyCast – Weather Forecast Web App (Personal Project)</span></div>
                                    <ul className="mb-0">
                                        <li>Designed and developed “SkyCast”, a responsive weather application</li>
                                        <li>Integrated OpenWeatherMap API to fetch real-time weather data for searched locations.</li>
                                        <li>Utilized Axios for API requests and Bootstrap for a clean, mobile-friendly UI.</li>
                                        <li>Demonstrated skills in API integration, state management, and frontend architecture.</li>
                                        <li>SkyCast is seamlessly integrated into this resume website as a live weather widget, built using ReactJS, Axios, and the OpenWeatherMap API.</li>
                                        <li>In desktop view, the forecast is displayed directly. In mobile view, a SkyCast logo appears at the bottom-right corner — tapping it reveals the full weather forecast.</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                    {/*-- Freelance --*/}
                    <div className="row">
                        <div className="col-md-12 col-lg-12 companyDetails">
                            <div className="companyDetails">
                                <div className="companyName">
                                    <p>Freelance - </p>
                                    <small><a target="_blank_" href="https://knsexpress.netlify.app/">KNS Logistics</a> </small>
                                </div>
                                    <div className="term">Sept 2024 - Present</div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                    <div className="divContainer">
                                        <span className='sub-heading-1'><a href="https://knsexpress.netlify.app/">KNS Logistics</a> – Static Website</span>
                                        <ul className="mb-0">
                                            <li>Developed and deployed a fully responsive static website to showcase logistics services, branches, and contact details.</li>
                                            <li>Focused on clean UI, mobile responsiveness, and professional branding using CSS and Bootstrap</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-12 ml1_5rem">
                                        <div className="divContainer">
                                            <span className='sub-heading-1'>KNS Logistics - Consignment Booking(In Progress)</span>
                                            <ul className="mb-0">
                                                <li>Built an interactive frontend for booking consignments between Consignor and Consignee.</li>
                                                <li>Developed a PDF reporting feature based on Lorry Receipts (LRs), summarizing transported goods and destinations.</li>
                                                <li>Utilized modular SCSS for styling and Docker containers to streamline development and deployment workflows.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-- Personal Project--*/}

                    <div className="row">
                        <div className="col-md-12 col-lg-12 companyDetails">
                            <div className="companyDetails">
                                <div className="companyName">
                                    <p>Personal - </p> <small>Skycast </small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-12 ml1_5rem">
                                    <div className="divContainer">
                                        <span className='sub-heading-1'>Skycast</span>
                                        <ul className="mb-0">
                                            <li>Designed and developed “SkyCast”, a responsive weather application</li>
                                            <li>Integrated OpenWeatherMap API to fetch real-time weather data for searched locations.</li>
                                            <li>Utilized Axios for API requests and Bootstrap for a clean, mobile-friendly UI.</li>
                                            <li>Demonstrated skills in API integration, state management, and frontend architecture.</li>
                                            <li>SkyCast is seamlessly integrated into this resume website as a live weather widget, built using ReactJS, Axios, and the OpenWeatherMap API.</li>
                                            <li>In desktop view, the forecast is displayed directly. In mobile view, a SkyCast logo appears at the bottom-right corner — tapping it reveals the full weather forecast.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/*-- Key Challenges --*/}
                    <div className="row">
                        <div className="col-md-12 col-lg-12 ml1_5rem">
                        <div className='divContainer'><span className='sub-heading-1'>Key Challenges</span></div><small className="ml-4">During my tenure, I successfully addressed several key challenges, including:</small>
                            <ul className="mb-0">
                                <li><b>Dynamic Data Filtering:</b> Implemented advanced filtering mechanisms for multi-data grids, enhancing data accessibility and user experience.</li>
                                <li><b>Content Migration:</b> Seamlessly transitioned existing CKEditor values to Summernote, ensuring data integrity and a smooth user experience.</li>
                                <li><b>Complex Data Handling:</b> Optimized grid performance for large datasets, reducing load times and improving responsiveness</li>
                                <li><b>Device Compatibility:</b> Ensured seamless application functionality across various screen sizes and resolutions, improving accessibility.</li>
                                <li><b>User Experience Enhancement:</b> Resolved UI Inconsistencies, Improved Customization flexibility, and fixed critical bugs to enhance usability.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
} 

export default Experience;