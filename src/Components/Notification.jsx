
import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import WarningIcon from '@mui/icons-material/Warning';

function Notification() {
    const [data, setdata] = useState("mynotificationdiv");
    const [data1, setdata1] = useState("mynotificationdiv");
    const [data2, setdata2] = useState("mynotificationdiv");
    const [data3, setdata3] = useState("mynotificationdiv");
    const [note, setnote] = useState("myNotcontainer")
    const [note1, setnote1] = useState("myNotcontainer")
    const [note2, setnote2] = useState("myNotcontainer")
    const [note3, setnote3] = useState("myNotcontainer")
    const [note4, setnote4] = useState("myNotcontainer")
    const [note5, setnote5] = useState("myNotcontainer")
    const [note6, setnote6] = useState("myNotcontainer")
    const [note7, setnote7] = useState("myNotcontainer")
    const handclick = () => {
        setdata("mynotification")
    }
    useEffect(() => {
        setTimeout(() => {
            setdata("mynotificationdiv");
            setdata1("mynotificationdiv");
            setdata2("mynotificationdiv");
            setdata3("mynotificationdiv");
        }, 5000);
    });
    return (
        <>
            <div className={data} style={{ backgroundColor: "rgb(255, 255, 255)" }}  >
                <div className="row p-2">
                    <div className="col-md-6 col-lg-6">
                        <p className="text-success ms-2">
                            <DoneIcon className="fs-6 me-1" />
                            <span>Dashborard</span>
                        </p>
                    </div>
                    <div className="col-md-6  col-lg-6 text-end">
                        <span className='pe-3'>11 mint ago</span>
                        <CloseIcon onClick={() => setdata("mynotificationdiv")} />
                    </div>
                    <hr />
                    <span className='ps-5'>
                        Hello, This is a notification message.
                    </span>
                </div>
            </div >
            <div className={data1}>
                <div className="row p-2" >
                    <div className="col-md-6 col-lg-6">
                        <p>
                            <NotificationsIcon className='fs-6 me-1' />
                            Dashborard</p>
                    </div>
                    <div className="col-md-6  col-lg-6 text-end">
                        <span className='pe-3'>11 mint ago</span>
                        <CloseIcon onClick={() => setdata1("mynotificationdiv")} />
                    </div>
                    <hr />
                    <span className='ps-5'>
                        Hello, This is a notification message.
                    </span>
                </div>
            </div >
            <div className={data2}  >
                <div className="row p-2">
                    <div className="col-md-6 col-lg-6"  >
                        <p className='text-warning ms-2'>
                            <StarIcon className='me-1 fs-6' />
                            Dashborard</p>
                    </div>
                    <div className="col-md-6  col-lg-6 text-end">
                        <span className='pe-3'>11 mint ago</span>
                        <CloseIcon onClick={() => setdata2("mynotificationdiv")} />
                    </div>
                    <hr />
                    <span className='ps-5'>
                        Hello, This is a notification message.
                    </span>
                </div>
            </div >
            <div className={data3}  >
                <div className="row p-2">
                    <div className="col-md-6 col-lg-6">
                        <p className='text-danger ms-2'>
                            <WarningIcon className='fs-6 me-1' />
                            Dashborard</p>
                    </div>
                    <div className="col-md-6  col-lg-6 text-end">
                        <span className='pe-3'>11 mint ago</span>
                        <CloseIcon onClick={() => setdata3("mynotificationdiv")} />
                    </div>
                    <hr />
                    <span className='ps-5'>
                        Hello, This is a notification message.
                    </span>
                </div>
            </div >
            <div className="notification">
                <h4>Alerts </h4>
                <div className={note} style={{ backgroundColor: 'rgb(232,56,117)' }}>
                    <div className="container">
                        <p>A simple primary alert with <a className='fw-bold' href="">an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note1} style={{ backgroundColor: 'rgb(104,112,126)' }}>                    <div className="container">
                    <p>A simple secondary alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote1("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note2} style={{ backgroundColor: 'rgb(92,179,96)' }}>
                    <div className="container">
                        <p>A simple success alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote2("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note3} style={{ backgroundColor: 'rgb(236,75,72)' }}>
                    <div className="container">
                        <p>A simple danger alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote3("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note4} style={{ backgroundColor: 'rgb(254,160,29)' }}>
                    <div className="container">
                        <p>A simple warning alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote4("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note5} style={{ backgroundColor: 'rgb(61,151,238)' }}>
                    <div className="container">
                        <p>A simple info alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote5("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note6} style={{ backgroundColor: 'rgb(209,215,220)' }}>
                    <div className="container">
                        <p>A simple light alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote6("mynotificationdiv")} />
                    </div>
                </div>
                <div className={note7} style={{ backgroundColor: 'rgb(55,55,61)' }}>
                    <div className="container">
                        <p>A simple dark alert with <a className='fw-bold' href=""> an example link.</a> Give it a click if you like.</p>
                    </div>
                    <div className=" containertext-end">
                        <CloseIcon onClick={() => setnote7("mynotificationdiv")} />
                    </div>
                </div>

            </div >

            <div className="notificationdiv2 rounded border ">
                <h6>
                    Notifications
                </h6>
                <p className="fontcolr">
                    Notifications on this page use Toasts from Bootstrap. Read more details here.
                </p>
                <div className="">

                    <button className="btn btn-success m-2 p-2" onClick={handclick} > SUSSESS NOTIFICATION</button>
                    <button className="btn btn-info m-2 p-2" onClick={() => setdata1('mynotification1')}> INFO NOTIFICATION</button>
                    <button className="btn btn-warning m-2 p-2" onClick={() => setdata2('mynotification')}> WARNING NOTIFICATION</button>
                    <button className="btn btn-danger m-2 p-2" onClick={() => setdata3('mynotification')}> ERROR NOTIIFICATION</button>
                </div>
            </div>
        </>

    );
}

export default Notification;
