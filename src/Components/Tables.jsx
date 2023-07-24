import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Tables() {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="container-fluid d-flex flex-column border rounded bg-white">
                    <div className="container border color2 chartbox rounded datainsidecontainer text-white p-3 mb-4 " style={{ height: "70px" }} >
                        <h5>
                            Authors Table
                        </h5>
                    </div>
                    <table className='table'>
                        <tr>
                            <th> AUTHOR</th>
                            <th> Function</th>
                            <th> Status</th>
                            <th> EMPLOYED</th>
                            <th> ACTION</th>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        John Michael
                                    </h6>
                                    <span >
                                        john@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Manager</h6>
                                    <span className=''>Organization</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge  color3 text-white'> ONLINE</span>
                            </td>
                            <td>
                                23/04/18
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        Alexa Liras
                                    </h6>
                                    <span >
                                        alexa@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Programator</h6>
                                    <span className=''>Devloper</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge  color3 text-white'> ONLINE</span>
                            </td>
                            <td>
                                11/01/19
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        Laurent Perrier
                                    </h6>
                                    <span >
                                        laurent@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Executive</h6>
                                    <span className=''>Projects</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge  bg-dark text-white'> OFFLINE</span>
                            </td>
                            <td>
                                19/09/17
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        Michael Levi
                                    </h6>
                                    <span >
                                        michael@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Programator</h6>
                                    <span className=''>Devloper</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge  color3 text-white'> ONLINE</span>
                            </td>
                            <td>
                                24/12/08
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        Richard Gran
                                    </h6>
                                    <span >
                                        richard@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Manager</h6>
                                    <span className=''>Executive</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge bg-dark text-white'> OFFLINE</span>
                            </td>
                            <td>
                                04/10/21
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="	https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                </div>
                                <div>
                                    <h6 className='my-0'>
                                        Miriam Eric
                                    </h6>
                                    <span >
                                        miriam@creative-team.com
                                    </span>
                                </div>
                            </div>
                            <td>
                                <div>
                                    <h6 className='m-0 '>Programator</h6>
                                    <span className=''>Devloper</span>
                                </div>
                            </td>
                            <td>
                                <span className=' badge  bg-dark text-white'> OFFLINE</span>
                            </td>
                            <td>
                                14/09/20
                            </td>
                            <td>
                                Edit
                            </td>
                        </tr>
                    </table>
                </div>
            </div >
            <div className="container-fluid mt-5">
                <div className="container-fluid border rounded bg-white">
                    <div className="container border color2 chartbox rounded datainsidecontainer text-white p-3 mb-4 " style={{ height: "70px" }} >
                        <h5>
                            Project Table
                        </h5>
                    </div>
                    <table className='table ' id='mytable'>
                        <tr>
                            <th>PROJECT </th>
                            <th>BUDUGET</th>
                            <th>STATUS</th>
                            <th>COMPLETION</th>
                            <th>ACTION</th>
                        </tr>
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://managementvisuel.fr/wp-content/uploads/2023/05/Asana-Logo-1.png" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Asana
                                    </span>
                                </div>
                            </div>
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
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://cdn-icons-png.flaticon.com/512/38/38401.png" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Github
                                    </span>
                                </div>
                            </div>
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
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://companieslogo.com/img/orig/TEAM-ddb0dd07.png?t=1683437134" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Atlassian
                                    </span>
                                </div>
                            </div>
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
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Spotify
                                    </span>
                                </div>
                            </div>
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
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://toppng.com/uploads/preview/slack-new-logo-icon-11609376883z32jbkf8kg.png" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Slack
                                    </span>
                                </div>
                            </div>
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
                        <tr>
                            <div className="mytablecontainer">
                                <div>
                                    <img src="https://cdn.worldvectorlogo.com/logos/invision.svg" alt="" />
                                </div>
                                <div>
                                    <span >
                                        Invesion
                                    </span>
                                </div>
                            </div>
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
                    </table>
                </div>
            </div >
        </>

    );
}

export default Tables;
