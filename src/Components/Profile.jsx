import React from 'react';
import richard from "../images/bruce-mars.jpg"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import img2 from "../images/team-2.jpg";
import img3 from "../images/marie.jpg";
import img4 from "../images/ivana-square.jpg";
import img5 from "../images/team-4.jpg";
import img6 from "../images/team-3.jpg";
import home1 from "../images/home-decor-1.jpg";
import home2 from "../images/home-decor-2.jpg";
import home3 from "../images/home-decor-3.jpg";
import home4 from "../images/home-decor-4.jpeg";

function Profile() {
    return (
        <>
            <div className="container-fluid border myprofile mt-0 position-relative">
                <div className="container-fluid profilebgimg border">
                </div>
                <div className="container-fluid bg-white p-3" id='MyProfilediv'>
                    <div className="row profile">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex flex-row'>
                                <img className=' img-fluid rounded-circle' src={richard} alt="" />
                                <div className="container my-2">
                                    <p className='mb-0'>Richard Davis</p>
                                    <span>CEO / Co-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 text-end">
                            <div className="btn-group">
                                <button className='btn border-2 '> <HomeIcon />App</button>
                                <button className='btn border-2 '><EmailIcon />Message</button>
                                <button className='btn border-2 '><SettingsIcon />Settings</button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 p-3">
                        <div className="col-lg-4 col-md-4 col-sm-12 border-end">Platform Settings
                            <div className="my-3">
                                <h6>Account</h6>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" />
                                    <label className="form-check-label">
                                        Email me when someone follows me</label>
                                </div>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" />
                                    <label className="form-check-label">
                                        Email me when someone answers on my post</label>
                                </div>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                    <label className="form-check-label">Email me when someone mentions me
                                    </label>
                                </div>
                            </div>
                            <div className="my-3">
                                <h6>Application</h6>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="appflexSwitchCheckDefault3" />
                                    <label className="form-check-label">
                                        New launches and projects
                                    </label>
                                </div>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="appflexSwitchCheckChecked" checked />
                                    <label className="form-check-label">
                                        Monthly product updates
                                    </label>
                                </div>
                                <div className="form-check form-switch my-3">
                                    <input className="form-check-input" type="checkbox" id="appflexSwitchCheckDefault4" />
                                    <label className="form-check-label">
                                        Subscribe to newsletter
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 border-end">
                            <div className='d-flex flex-row'>
                                <div className='container p-0'>
                                    Pofile information
                                </div>

                                <div className="container text-end"><EditIcon /></div>
                            </div>
                            <div>
                                <p className='py-3'>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                                </p>
                                <p>
                                    <span className='h6'>Full Name:</span> Alec M. Thompson
                                </p>
                                <p>
                                    <span className='h6'> Mobile: </span>(44) 123 1234 123
                                </p>
                                <p>
                                    <span className='h6'>Email: </span>alecthompson@mail.com
                                </p>
                                <p>
                                    <span className='h6'> Location: </span>USA
                                </p>
                                <p>
                                    <span className='h6'> Social: </span>
                                </p>
                            </div></div>
                        <div className="col-lg-4 col-md-4 col-sm-12  myprofileroot">Convertation
                            <div className=" ">
                                <div className="container mt-3">
                                    <div className="d-flex flex-row">
                                        <div >
                                            <img className='rounded-circle ' src={img2} alt="" />
                                        </div>
                                        <div className='container'>
                                            <p className=''>
                                                Sophie B.
                                                <p>
                                                    Hi! I need more information..
                                                </p>
                                            </p>
                                        </div>
                                        <div className="w-25"><button className='btn border-0 text-primary'>REPLY</button></div>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                            <div className=" flex-row">
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <div >
                                            <img className='rounded-circle ' src={img3} alt="" />
                                        </div>
                                        <div className='container'>
                                            <p className=''>
                                                Anne Marie
                                                <p>
                                                    Awesome work, can you..
                                                </p>
                                            </p>
                                        </div>
                                        <div className="w-25"><button className='btn border-0 text-primary text-primary'>REPLY</button></div>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                            <div className=" flex-row">
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <div >
                                            <img className='rounded-circle ' src={img4} alt="" />
                                        </div>
                                        <div className='container'>
                                            <p className=''>
                                                Ivanna
                                                <p>
                                                    About files I can..
                                                </p>
                                            </p>
                                        </div>
                                        <div className="w-25"><button className='btn border-0 text-primary'>REPLY</button></div>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                            <div className=" flex-row">
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <div >
                                            <img className='rounded-circle ' src={img5} alt="" />
                                        </div>
                                        <div className='container'>
                                            <p className=''>
                                                Peterson
                                                <p>
                                                    Have a great afternoon..
                                                </p>
                                            </p>
                                        </div>
                                        <div className="w-25"><button className='btn border-0 text-primary'>REPLY</button></div>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                            <div className=" flex-row">
                                <div className="container">
                                    <div className="d-flex flex-row">
                                        <div >
                                            <img className='rounded-circle ' src={img6} alt="" />
                                        </div>
                                        <div className='container'>
                                            <p className=''>
                                                Nick Daniel
                                                <p>
                                                    Hi! I need more information..
                                                </p>
                                            </p>
                                        </div>
                                        <div className="w-25"><button className='btn border-0 text-primary'>REPLY</button></div>
                                    </div>
                                </div>
                                <div className="container">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-3 pt-3 ">
                        <h6>Projects</h6>
                        <p>Architects design houses</p>
                        <div className="row myprofilecard ">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <img className='rounded img-fluid my-3' src={home1} alt="" />
                                <p> Project #2</p>
                                <h5 className='my-2'>Modern</h5>
                                <p>As Uber works through a huge amount of internal management turmoil.</p>
                                <button className='btn border-primary text-primary btn-sm'> VIEW PROJECT</button>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <img className='rounded img-fluid my-3' src={home2} alt="" />
                                <p>Project #1</p>
                                <h5 className='my-2'>Modern</h5>
                                <p>Music is something that everyone has their own specific opinion about.</p>
                                <button className='btn border-primary text-primary btn-sm'> VIEW PROJECT</button>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <img className='rounded img-fluid my-3' src={home3} alt="" />
                                <p> Project #3 </p>
                                <h5 className='my-2'>Modern</h5>
                                <p>Different people have different taste, and various types of music.</p>
                                <button className='btn border-primary text-primary btn-sm'> VIEW PROJECT</button>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <img className='rounded img-fluid my-3' src={home4} alt="" />
                                <p> Project #4</p>
                                <h5 className='my-2'>Modern</h5>
                                <p>Why would anyone pick blue over pink? Pink is obviously a better color.</p>
                                <button className='btn border-primary text-primary btn-sm'> VIEW PROJECT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;
