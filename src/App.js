
import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Tables from './Components/Tables';
import Billing from './Components/Billing';
import RTL from './Components/RTL';
import Notification from './Components/Notification'
import Profile from './Components/Profile';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import TextField from '@mui/material/TextField';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { MdDashboard } from 'react-icons/md';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';

function App(props) {
 
  const [mainSidenav, setmainSidenav]=useState("HomeNav");
  const [mainbodydiv, setmainbodydiv]=useState("HomeBody");
  const [mainnav, setmainnav]=useState("dashnavbar")
  const clickbtn =()=>{
    setmainSidenav("MYnewhomenav");
    setmainbodydiv("myhomebody")
    setmainnav("Mynewdashnavbar")

  }
  const showdata =()=>{
    setmainSidenav("HomeNav");
    setmainbodydiv("HomeBody");
    setmainnav("dashnavbar");
  }
  return (
    <>
    <div className='container-fluid d-flex flex-row '>
      <div className='d-flex flex-coloum'>
        <div className={mainSidenav}>
        <div className="rounded color1">
            < div className='container text-end mybtn'>
              <CloseIcon className='btn  border-0 p-1 text-white ' onClick={clickbtn}/>
            </div>
            <nav className="Sidenavbar btn-group" >
        <ul >
          <li href="">
            <Link to="/" >
              <MdDashboard className='sidenav_icon' />Dashbord
            </Link>
          </li>
          <li href="">
            <Link to="/Tables" >
              <TableViewIcon className='sidenav_icon' />Tables
            </Link>
          </li>
          <li href="">
            <Link to="/Billing" >
              <ReceiptLongIcon className='sidenav_icon' />Billing</Link>
          </li>
          <li href=""><Link to="/RTL" >
            <FormatTextdirectionRToLIcon className='sidenav_icon' />RTL</Link>
          </li >
          <li href="">
            <Link to="/Notification" >
              <NotificationsIcon className='sidenav_icon' />Notifications</Link>
          </li>
          <li href="">
            <Link to="/Profile" >
              <PersonIcon className='sidenav_icon' />Profit</Link>
          </li>
          <li href="">
            <Link to="/SignIn"  >
              <LoginIcon className='sidenav_icon' />Sign In</Link>
          </li>
          <li href="">
            <Link to="/SignUp" >
              <AssignmentIcon className='sidenav_icon' />Sign Up</Link>
          </li>

        </ul >
      </nav >
        </div>
        </div>
      </div>
        <div className={mainbodydiv}>
            <div className={mainnav}>
              <div className="d-flex flex-row rounded">
                <MainNavbar/>
                {/* <div className="container p-2" >
                    <span className='p-2'>
                        <HomeIcon className='fs-6' />
                    </span >
                    /<span className='ps-1'>{}</span >
                    <h6 className='ps-2'>Dashboard</h6>
                </div > */}
                <div className="container text-end myhomenavbar p-2">
                    <TextField className=' ' size="small" label="search" />
                    <button className='btn border-0'><AccountCircleIcon /></button>
                    <button className='btn border-0'><SettingsIcon /></button>
                    <button className='btn border-0'><NotificationsIcon /></button>
                    <button className='btn border-0'><DehazeIcon id='mybtn' onClick={showdata} /></button>
                </div>
              </div >
             </div>
          <div id="homebodycont1">
        <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Tables" element={<Tables />}></Route>
        <Route path="/Billing" element={<Billing />}></Route>
        <Route path="/RTL" element={<RTL />}></Route>
        <Route path="/Notification" element={<Notification />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
        <Footer/>
        </div>
        </div>
      </div>
    </>
    
  );
}

export default App;
