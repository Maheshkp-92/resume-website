import React from 'react'

const Skills = ()=>{
    return(
        <div className='row'>
            <div className='col-md-12 col-lg-12 col-xs-12'>
                <div className='divContainer'><span className='sub-heading'>Technical Skills</span></div>
                    <table className='table ml1_5rem mt-2 table-borderless table-sm custom-table'>
                        <tbody>
                            <tr>
                                <td><b>Programming Languages:</b></td>
                                <td>
                                    <div className='d-flex flex-row align-items-baseline mt-2'>
                                        <div className='languages'>HTML</div> <div className='languages'>CSS</div> <div className='languages'>JavaScript</div> <div className='languages'>jQuery</div> <div className='languages'>ReactJs</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Tools/Editor:</b></td>
                                <td>
                                    <div className='d-flex flex-row align-items-baseline mt-2'>
                                        <div className='languages'>VS code</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Management Tool:</b> </td>
                                <td>
                                    <div className='d-flex flex-row align-items-baseline mt-2'>
                                        <div className='languages'>Asana</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><b>Build & Repository Management:</b></td>
                                <td>
                                    <div className='d-flex flex-row align-items-baseline mt-2'>
                                        <div className='languages'>Phabricator</div>
                                        <div className='languages'>Git-Hub</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
            </div>
        </div>
    );
}

export default Skills