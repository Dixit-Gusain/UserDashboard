import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Tables() {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="container-fluid d-flex flex-column border rounded bg-white">
                    <div className="container border color2 rounded datainsidecontainer text-white p-3 mb-4 " style={{ height: "70px" }} >
                        <h5>
                            Authors Table
                        </h5>
                    </div>
                    <div className="container-fluid" id='homepagetable'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th> AUTHOR</th>
                                    <th> Function</th>
                                    <th> Status</th>
                                    <th> EMPLOYED</th>
                                    <th> ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mytablecontainer">
                                    <td>
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img className='' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" alt="" />
                                            </div>
                                            <div className='ps-3'>
                                                <span className='h6'>
                                                    John Michael
                                                </span>
                                                <br />
                                                <span className=''>
                                                    john@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='h6 d-block m-0'>Manager</span>
                                        <span className=''>Organization</span>
                                    </td>
                                    <td>
                                        <span className=' badge  color3 text-white'> ONLINE</span>
                                    </td>
                                    <td>
                                        23/04/18
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <div className="d-flex flex-row">
                                            <div>
                                                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </div>
                                            <div className='ps-3'>
                                                <span className='h6'>
                                                    Alexa Liras
                                                </span> <br />
                                                <span >
                                                    alexa@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='h6 d-block m-0'>Programator</span>
                                        <span className=''>Devloper</span>
                                    </td>
                                    <td>
                                        <span className=' badge  color3 text-white'> ONLINE</span>
                                    </td>
                                    <td>
                                        11/01/19
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>

                                <tr className="mytablecontainer">
                                    <td>
                                        <div className="d-flex flex-row">
                                            <div>

                                                <img src="	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </div>
                                            <div className="ps-3">
                                                <span className='h6'>
                                                    Laurent Perrier
                                                </span> <br />
                                                <span >
                                                    laurent@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 className='m-0 '>Executive</h6>
                                        <span className=''>Projects</span>
                                    </td>
                                    <td>
                                        <span className=' badge  bg-dark text-white'> OFFLINE</span>
                                    </td>
                                    <td>
                                        19/09/17
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>

                                <tr className="mytablecontainer">
                                    <td>
                                        <div className="d-flex flex-">
                                            <div>

                                                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </div>
                                            <div className="ps-3">

                                                <span className='h6'>
                                                    Michael Levi
                                                </span><br />
                                                <span >
                                                    michael@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className=' h6 d-block m-0 '>Programator</span>
                                        <span className=''>Devloper</span>
                                    </td>
                                    <td>
                                        <span className=' badge  color3 text-white'> ONLINE</span>
                                    </td>
                                    <td>
                                        24/12/08
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <div className="d-flex flex-">
                                            <div>

                                                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </div>
                                            <div className="ps-3">
                                                <span className='h6'>
                                                    Richard Gran
                                                </span><br />
                                                <span >
                                                    richard@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className=' h6 d-block m-0 '>Manager</span>
                                        <span className=''>Executive</span>
                                    </td>
                                    <td>
                                        <span className=' badge bg-dark text-white'> OFFLINE</span>
                                    </td>
                                    <td>
                                        04/10/21
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <div className='d-flex flex-row'>
                                            <div>
                                                <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </div>
                                            <div className='ps-3'>
                                                <span className='h6'>
                                                    Miriam Eric
                                                </span><br />
                                                <span >
                                                    miriam@creative-team.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className=' h6 d-block m-0 '>Programator</span>
                                        <span className=''>Devloper</span>
                                    </td>
                                    <td>
                                        <span className=' badge  bg-dark text-white'> OFFLINE</span>
                                    </td>
                                    <td>
                                        14/09/20
                                    </td>
                                    <td className='ps-4'>
                                        Edit
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
            <div className="container-fluid mt-5">
                <div className="container-fluid border rounded bg-white">
                    <div className="container border color2 rounded datainsidecontainer text-white p-3 mb-4 " style={{ height: "70px" }} >
                        <h5>
                            Project Table
                        </h5>
                    </div>
                    <div id='homepagetable'>
                        <table className='table ' id='mytable'>
                            <thead>
                                <tr>
                                    <th>PROJECT </th>
                                    <th>BUDUGET</th>
                                    <th>STATUS</th>
                                    <th>COMPLETION</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://managementvisuel.fr/wp-content/uploads/2023/05/Asana-Logo-1.png" alt="" />
                                        <span className='mx-2'>
                                            Asana
                                        </span>
                                    </td>
                                    <td>
                                        $2,500
                                    </td>
                                    <td>
                                        working
                                    </td>
                                    <td>
                                        23/04/18
                                    </td>
                                    <td>
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>

                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="" />
                                        <span className='mx-2'>
                                            Github
                                        </span>
                                    </td>
                                    <td>
                                        $5,000
                                    </td>
                                    <td>
                                        done
                                    </td>
                                    <td>
                                        11/01/19
                                    </td>
                                    <td>
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1683437134" alt="" />

                                        <span className='mx-2'>
                                            Atlassian
                                        </span>
                                    </td>
                                    <td>
                                        $3,400
                                    </td>
                                    <td>

                                        canceled
                                    </td>
                                    <td>
                                        19/09/17
                                    </td>
                                    <td>
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" />

                                        <span className='mx-2'>
                                            Spotify
                                        </span>
                                    </td>
                                    <td>
                                        $14,000
                                    </td>
                                    <td>
                                        working
                                    </td>
                                    <td>
                                        24/12/08
                                    </td>
                                    <td>
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png" alt="" />
                                        <span className='mx-2'>
                                            Slack
                                        </span>
                                    </td>
                                    <td>
                                        $1,000
                                    </td>
                                    <td>
                                        canceled
                                    </td>
                                    <td>
                                        04/10/21
                                    </td>
                                    <td>
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>
                                <tr className="mytablecontainer">
                                    <td>
                                        <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="" />
                                        <span className='mx-2'>
                                            Invesion
                                        </span>
                                    </td>
                                    <td>
                                        $2,300
                                    </td>
                                    <td>
                                        done
                                    </td>
                                    <td>
                                        14/09/20
                                    </td>
                                    <td >
                                        <MoreVertIcon className=' btn fs-1 border-0' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Tables;
