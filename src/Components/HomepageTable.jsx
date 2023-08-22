import react from 'react';
import CheckIcon from '@mui/icons-material/Check';
// import ProgressBar from "@ramonak/react-progress-bar";
import OrderOverview from './OrderOverview';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function HomepageTable() {
    return (
        <>
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 border p-3  bg-white rounded">
                        <div>
                            Projects
                        </div>
                        <div>
                            <CheckIcon /> 30 done this month
                        </div>
                        <hr className='p-0' />
                        <div id='homepagetable'>
                            <table className='table' >
                                <thead>
                                    <tr>
                                        <th>COMPANIES</th>
                                        <th>MEMBERS</th>
                                        <th>BUDGET</th>
                                        <th>COMPLETION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Material UI XD Version</td>
                                        <tr className='d-flex'>
                                            <td className='mytableimg'>
                                                <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" alt="" />

                                            </td>
                                            <td className='mytableimg'>
                                                <img className='tbimg2' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" alt="" />
                                            </td>
                                            <td className='mytableimg '>
                                                <img className='tbimg3' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </td>
                                            <td className='mytableimg '>
                                                <img className='tbimg4' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </td>
                                        </tr>
                                        <td>
                                            $14,000
                                        </td>
                                        <td>
                                            <ProgressBar now={60} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Add Progress Track</td>
                                        <td>
                                            <th className="d-flex">
                                                <th className='mytableimg'>
                                                    <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" alt="" />
                                                </th>
                                                <th className='mytableimg'>
                                                    <img className='tbimg2' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                                </th>
                                            </th>
                                        </td>
                                        <td>$3,000</td>
                                        <td>
                                            <ProgressBar now={10} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fix Platform Errors</td>
                                        <td className='d-flex'>
                                            <th className='mytableimg'>
                                                <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" alt="" />
                                            </th>
                                            <th className='mytableimg'>
                                                <img className='tbimg2' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </th>
                                        </td>
                                        <td>Not set</td>
                                        <td>
                                            <ProgressBar variant="success" now={100} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Launch our Mobile App</td>
                                        <th className="d-flex">
                                            <th className='mytableimg'>
                                                <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </th>
                                            <th className='mytableimg'>

                                                <img className='tbimg2' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg" alt="" />
                                            </th>
                                            <th className='mytableimg'>

                                                <img className='tbimg3' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg" alt="" />

                                            </th>
                                            <th className='mytableimg'>
                                                <img className='tbimg4' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" alt="" />
                                            </th>
                                        </th>
                                        <td>$20,500</td>
                                        <td>

                                            <ProgressBar variant="success" now={100} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Add the New Pricing Page</td>
                                        <th className="d-flex">
                                            <th className='mytableimg'>
                                                <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </th>
                                        </th>
                                        <td>$500</td>
                                        <td>
                                            <ProgressBar now={30} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Redesign New Online Shop</td>
                                        <th className="d-flex">
                                            <th className='mytableimg'>
                                                <img className='tbimg1' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-1.0fd36e0ee93dcfacdef8.jpg" alt="" />
                                            </th>
                                            <th className='mytableimg'>
                                                <img className='tbimg2' src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg" alt="" />
                                            </th>
                                        </th>
                                        <td>$2,000</td>
                                        <td >
                                            <ProgressBar now={50} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col m border rounded bg-white  p-3 m-2"><OrderOverview /></div>
                </div>
            </div>


        </>
    )
}

export default HomepageTable;