
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import DehazeIcon from '@mui/icons-material/Dehaze';


function MainNavbar(props) {

    const [mynavstyle, setnavstyle] = useState('MYnewhomenav');
    const [stylehomebody, setstylehomebody] = useState('NewHomenav');
    const showdata = () => {
        setnavstyle("HomeNav");
        setstylehomebody("HomeBody");
    }
    return (
        <>
            <div className="d-flex  flex-row rounded dashnavbar">
                <div className="container p-2" >
                    <span className='p-2'>
                        <HomeIcon className='fs-6' />
                    </span >
                    /<span className='ps-1'>{props.pageName}</span >
                    <h6 className='ps-2'>Dashboard</h6>
                </div >
                <div className="container text-end myhomenavbar p-2">
                    <TextField className=' ' size="small" label="search" />
                    <button className='btn border-0'><AccountCircleIcon /></button>
                    <button className='btn border-0'><SettingsIcon /></button>
                    <button className='btn border-0'><NotificationsIcon /></button>
                    <button className='btn border-0' onClick={showdata}><DehazeIcon /></button>
                </div>
            </div >
        </>

    );
}

export default MainNavbar;
