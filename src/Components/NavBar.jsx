import { React, useState } from 'react'
import { MdDashboard } from 'react-icons/md';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TableViewIcon from '@mui/icons-material/TableView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

const NavBar = () => {

  // const [text, settext] = useState('Dashboard');
  // const handelclick = () => {
  //   settext('')
  // }
  return (
    <>
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
    </>

  )
}

export default NavBar;
