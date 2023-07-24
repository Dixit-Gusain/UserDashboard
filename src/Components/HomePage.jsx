import React, { useState } from 'react';
import { MdPersonAdd } from 'react-icons/md';
import StoreIcon from '@mui/icons-material/Store';
import WeekendIcon from '@mui/icons-material/Weekend';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HomepageTable from './HomepageTable';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import { Chart as ChartJS, BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
)

function HomePage() {
    const data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: 'view',
                data: [50, 20, 10, 22, 50, 10, 40],
                backgroundColor: 'rgb(193,211,231)',
                borderRadius: 3,
                categoryPercentage: 0.4,
            }
        ]
    }
    const option = {

        scales: {
            x: {
                ticks: {
                    color: "white"
                },
            },
            y: {
                ticks: {
                    stepSize: 20,
                    color: "white"
                },

            }
        }

    }
    const linedata = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: '',
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
                backgroundColor: 'rgb(193,211,231)',
                borderColor: 'rgb(193,211,231)',
            },
        ]
    }
    const optionline = {
        scales: {
            x: {
                grid: {
                    color: 'rgb(193,211,231)',
                    lineWidth: 0,
                },
                ticks: {
                    color: "white"
                },
            },
            y: {
                grid: {
                    color: 'rgb(193,211,231)',
                },
                ticks: {
                    stepSize: 200,
                    color: "white"
                },
            }
        }
    }
    return (
        <>
            <div className="container-fluid m-2">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="col-12 cardcont rounded ">
                            <div className="col-4 rounded smallcard color1">
                                <div className=''>
                                    <WeekendIcon className="text-white m-3 fs-2" /></div>
                            </div>
                            <div className=" text-end pt-2 px-2">
                                Bookings
                                <h4>281</h4>
                                <hr />
                            </div>
                            <p><span className='text-success h6 px-2'>+55%</span>than lask week</p>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3 ">
                        <div className="col-12 cardcont rounded  ">
                            <div className="col-4 rounded smallcard color2"><LeaderboardIcon className='text-white m-3 fs-2' /></div>

                            <div className=" text-end pt-2 px-2">
                                Today's Users
                                <h4>2,300</h4>
                                <hr />
                            </div>
                            <p><span className='text-success h6 px-2'>+3%</span>than last month</p>
                        </div></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="col-12 cardcont rounded ">
                            <div className="col-4 rounded smallcard color3"><StoreIcon className='text-white m-3 fs-2' /></div>
                            <div className=" text-end pt-2 px-2">
                                Revenue
                                <h4>34k</h4>
                                <hr />
                            </div>
                            <p> <span className='text-success h6 px-2'>+1%</span>than yesterday</p>

                        </div></div>
                    <div className="col-lg-3 col-md-4 col-sm-6 my-3">
                        <div className="col-12 cardcont rounded ">
                            <div className="col-4 rounded smallcard color4"><MdPersonAdd className='text-white m-3 fs-2 ' /></div>
                            <div className=" text-end pt-2 px-2">
                                Followers
                                <h4>+91</h4>
                                <hr />
                            </div>
                            <p className='px-2'> Just Updated</p>

                        </div>
                    </div>
                </div>
            </div >
            <div className="container-fluid Showchartdata m-2">
                <div className="row ">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="col-12 chartdata border rounded">
                            <div className="container datainsidecontainer ">
                                <div className="chartbox color2 text-white rounded mb-3 p-2">
                                    <Bar data={data}
                                        options={option}></Bar>
                                </div>
                                <h6 className=' m-0'>Website Views</h6>
                                <p >Last Campign Performance</p>
                                <hr />
                                <p><span className='ps-2 '><WatchLaterOutlinedIcon className='myiconwatch' /></span>campaign sent 2 days ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="col-12  chartdata border rounded">
                            <div className="container datainsidecontainer">
                                <div className="chartbox color3 rounded mb-3 p-2">
                                    <Line data={linedata}
                                        options={optionline} ></Line>
                                </div>
                                <h6 className=' m-0'>Daily Sales</h6>
                                <p >(+15%) increase in today sales.</p><hr />
                                <p> <span className='ps-2 '><WatchLaterOutlinedIcon className='myiconwatch' /></span>updated 4 min ago</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="col-12  chartdata border rounded">
                            <div className="container datainsidecontainer">
                                <div className="chartbox color1 rounded mb-3 p-2">
                                    <Line data={linedata}
                                        options={optionline}></Line>
                                </div>
                                <h6 className=' m-0'>Completed Tasks</h6>
                                <p>Last Campaign Performance</p>
                                <hr />
                                <p> <span className='ps-2 '><WatchLaterOutlinedIcon className='myiconwatch' /></span>just updated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomepageTable />
        </>

    );
}

export default HomePage;
